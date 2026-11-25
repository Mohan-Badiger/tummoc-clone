import React, { useState, useEffect, useMemo, memo } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Svg, { Rect, Circle, Path } from 'react-native-svg';

interface DynamicQRCodeProps {
  size?: number;
  intervalMs?: number;
}

export const DynamicQRCode: React.FC<DynamicQRCodeProps> = memo(({
  size = 210,
  intervalMs = 800, // Refreshes periodically like authentic BMTC dynamic passes
}) => {
  const [seed, setSeed] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeed((prev) => (prev + 1) % 100000);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  const matrixSize = 29;
  const cellSize = size / matrixSize;

  const cells = useMemo(() => {
    const activeCells: { r: number; c: number }[] = [];
    const center = Math.floor(matrixSize / 2);

    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        // 1. Top-Left Finder (7x7)
        if (r <= 6 && c <= 6) {
          if (r === 0 || r === 6 || c === 0 || c === 6) {
            activeCells.push({ r, c });
          } else if (r >= 2 && r <= 4 && c >= 2 && c <= 4) {
            activeCells.push({ r, c });
          }
          continue;
        }

        // 2. Top-Right Finder (7x7)
        if (r <= 6 && c >= matrixSize - 7) {
          const cc = c - (matrixSize - 7);
          if (r === 0 || r === 6 || cc === 0 || cc === 6) {
            activeCells.push({ r, c });
          } else if (r >= 2 && r <= 4 && cc >= 2 && cc <= 4) {
            activeCells.push({ r, c });
          }
          continue;
        }

        // 3. Bottom-Left Finder (7x7)
        if (r >= matrixSize - 7 && c <= 6) {
          const rr = r - (matrixSize - 7);
          if (rr === 0 || rr === 6 || c === 0 || c === 6) {
            activeCells.push({ r, c });
          } else if (rr >= 2 && rr <= 4 && c >= 2 && c <= 4) {
            activeCells.push({ r, c });
          }
          continue;
        }

        // 4. Timing Bars
        if ((r === 6 || c === 6) && (r + c) % 2 === 0) {
          activeCells.push({ r, c });
          continue;
        }

        // 5. Reserve Center for BMTC Logo (Radius ~4 cells around center)
        const distFromCenter = Math.sqrt((r - center) ** 2 + (c - center) ** 2);
        if (distFromCenter <= 3.8) {
          continue;
        }

        // 6. Dynamic Rolling Payload Data Cells based on seed
        const pseudoRandom = (r * 31 + c * 17 + seed * 13 + (r ^ c) * 7) % 97;
        if (pseudoRandom > 46) {
          activeCells.push({ r, c });
        }
      }
    }
    return activeCells;
  }, [seed]);

  // Production optimization: Single composite SVG path instead of 200+ distinct React SVG nodes
  const qrPath = useMemo(() => {
    let d = '';
    const w = +(cellSize + 0.3).toFixed(2);
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const x = +(cell.c * cellSize).toFixed(2);
      const y = +(cell.r * cellSize).toFixed(2);
      d += `M${x},${y}h${w}v${w}h-${w}Z `;
    }
    return d;
  }, [cells, cellSize]);

  const centerLogoSize = cellSize * 7;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Crisp White Canvas */}
        <Rect x={0} y={0} width={size} height={size} fill="#FFFFFF" />

        {/* Dynamic Dark Data Cells rendered as single optimized path */}
        <Path d={qrPath} fill="#111827" />

        {/* Center Circular Mask */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={centerLogoSize / 2}
          fill="#FFFFFF"
        />
      </Svg>

      {/* Actual Cropped BMTC Circular Seal in Center */}
      <View
        style={[
          styles.logoOverlay,
          {
            width: centerLogoSize,
            height: centerLogoSize,
            borderRadius: centerLogoSize / 2,
          },
        ]}
      >
        <Image
          source={require('../../assets/bmtc_logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  logoImage: {
    width: '92%',
    height: '92%',
  },
});
