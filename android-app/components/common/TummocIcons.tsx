import React from 'react';
import Svg, { Path, Rect, Circle, G, Line, Text as SvgText } from 'react-native-svg';

interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

/**
 * 1. BMTC Pass ID Card Icon (Passes & Tickets row)
 * Reconstructed authentically from original Tummoc screenshot:
 * Features prominent person avatar on the left and horizontal info lines on the right,
 * without an extra nested card border.
 */
export const BmtcPassIcon: React.FC<IconProps> = ({
  width = 44,
  height = 24,
  size,
  color = '#0F2F38',
}) => {
  const w = size ?? width;
  const h = size ? size * (24 / 44) : height;
  return (
    <Svg width={w} height={h} viewBox="0 0 46 24" fill="none">
      {/* Avatar Head */}
      <Circle cx="8" cy="7.5" r="4.5" fill={color} />
      {/* Avatar Shoulders */}
      <Path d="M2 20.5c0-3.3 2.7-6 6-6s6 2.7 6 6" fill={color} />
      {/* Top info bar (longest) */}
      <Rect x="18" y="5" width="25" height="3.2" rx="1.6" fill={color} />
      {/* Middle info bar */}
      <Rect x="18" y="11" width="17" height="3.2" rx="1.6" fill={color} />
      {/* Bottom info bar */}
      <Rect x="18" y="17" width="10" height="3.2" rx="1.6" fill={color} />
    </Svg>
  );
};

/**
 * 2. Metro Ticket Icon (Passes & Tickets row)
 * Prominent front-facing train with windshield, headlights, and tracks.
 */
export const MetroTicketIcon: React.FC<IconProps> = ({
  size = 32,
  color = '#0F2F38',
}) => (
  <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    {/* Outer train shell */}
    <Rect x="4" y="2" width="24" height="23" rx="5" stroke={color} strokeWidth="2.2" />
    {/* Windshield */}
    <Rect x="7" y="5.5" width="18" height="9" rx="2" fill={color} />
    {/* Headlights */}
    <Circle cx="9.5" cy="18.5" r="1.8" fill={color} />
    <Circle cx="22.5" cy="18.5" r="1.8" fill={color} />
    {/* Bottom tracks / landing */}
    <Path d="M8 26l-3 4M24 26l3 4" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </Svg>
);

/**
 * 3. All-In-One Ticket Icon (Passes & Tickets row)
 * QR matrix markers on top and bold dark pill with "ALL-IN-ONE" below.
 */
export const AllInOneTicketIcon: React.FC<IconProps> = ({
  width = 36,
  height = 22,
  size,
  color = '#0F2F38',
}) => {
  const w = size ?? width;
  const h = size ? size * (22 / 36) : height;
  return (
    <Svg width={w} height={h} viewBox="0 0 36 22" fill="none">
      {/* QR Corner Markers */}
      <Rect x="4" y="1" width="3.5" height="3.5" rx="0.6" fill={color} />
      <Rect x="12" y="1" width="3.5" height="3.5" rx="0.6" fill={color} />
      <Rect x="20" y="1" width="3.5" height="3.5" rx="0.6" fill={color} />
      <Rect x="28" y="1" width="3.5" height="3.5" rx="0.6" fill={color} />

      {/* Dark Pill Bar */}
      <Rect x="1" y="9" width="34" height="12" rx="2.5" fill={color} />
      {/* White ALL-IN-ONE Label */}
      <SvgText
        x="18"
        y="17.5"
        fill="#FFFFFF"
        fontSize="5.8"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="0.3"
      >
        ALL-IN-ONE
      </SvgText>
    </Svg>
  );
};

/**
 * 3b. Auto Rickshaw Icon (Commute options: Direct Ride)
 * Features yellow roof canopy and dark body matching original Tummoc Direct Ride tile.
 */
export const AutoRickshawIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Yellow curved roof canopy */}
    <Path
      d="M4 8.5C4 5.5 6.5 3.5 12 3.5s8 2 8 5v2H4v-2z"
      fill="#FFB800"
    />
    {/* Dark Body Frame */}
    <Path
      d="M3.5 10.5h17v7a2.5 2.5 0 01-2.5 2.5h-12A2.5 2.5 0 013.5 17.5v-7z"
      fill="#0F2F38"
    />
    {/* Windshield */}
    <Rect x="6" y="11" width="12" height="4" rx="0.8" fill="#FFFFFF" opacity={0.9} />
    {/* Headlights */}
    <Circle cx="7.5" cy="17" r="1.2" fill="#FFB800" />
    <Circle cx="16.5" cy="17" r="1.2" fill="#FFB800" />
    {/* Front Wheel / Mudguard */}
    <Rect x="10.8" y="17.5" width="2.4" height="4.5" rx="1.2" fill="#000000" />
  </Svg>
);

/**
 * 4. Bottom Navbar: Tummoc Home Icon (Solid navy house)
 * Exact geometry from authentic Tummoc app: peaked roof, solid body, central cutout door.
 */
export const TummocHomeNavIcon: React.FC<IconProps> = ({ size = 25, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
    <Path
      d="M12.5 1.5L1.5 10.5h3.2v11.5a1 1 0 001 1h4.3v-7h5v7h4.3a1 1 0 001-1V10.5h3.2L12.5 1.5z"
      fill={color}
    />
  </Svg>
);

/**
 * 5. Bottom Navbar: Tummoc Money Wallet Icon
 * Exact geometry: horizontal wallet outline with peeking card edge on top, and clasp on right.
 */
export const TummocMoneyNavIcon: React.FC<IconProps> = ({ size = 25, color = '#8E9DA8' }) => (
  <Svg width={size} height={size} viewBox="0 0 26 24" fill="none">
    {/* Peeking card top lip */}
    <Path
      d="M6 7V4.5A1.5 1.5 0 017.5 3h11A1.5 1.5 0 0120 4.5V7"
      stroke={color}
      strokeWidth="1.8"
    />
    {/* Main wallet body */}
    <Rect
      x="2.5"
      y="6.5"
      width="21"
      height="14.5"
      rx="2.8"
      stroke={color}
      strokeWidth="1.8"
      fill="none"
    />
    {/* Clasp flap coming from right */}
    <Path
      d="M16.5 10.5h5.5a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-5.5a2.5 2.5 0 01-2.5-2.5v0a2.5 2.5 0 012.5-2.5z"
      stroke={color}
      strokeWidth="1.6"
      fill="#FFFFFF"
    />
    {/* Flap snap button */}
    <Circle cx="16.5" cy="13" r="1.3" fill={color} />
  </Svg>
);

/**
 * 6. Bottom Navbar: Bookings Ticket Stub Icon
 * Exact geometry: ticket stub rotated at 35 degrees with edge notches and perforation line.
 */
export const TummocBookingsNavIcon: React.FC<IconProps> = ({ size = 25, color = '#8E9DA8' }) => (
  <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
    <G transform="rotate(-35 12.5 12.5)">
      {/* Ticket body with rounded corners and side semicircular cutouts */}
      <Path
        d="M4.5 5.5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 000 4v2a2 2 0 01-2 2h-12a2 2 0 01-2-2v-2a2 2 0 000-4v-2a2 2 0 000-4v-2z"
        stroke={color}
        strokeWidth="1.9"
      />
      {/* Dashed perforation line */}
      <Line
        x1="10.5"
        y1="5"
        x2="10.5"
        y2="20"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
    </G>
  </Svg>
);

/**
 * 7. Bottom Navbar: Personal Profile Icon
 * Exact geometry: solid circular head and smoothly rounded torso silhouette.
 */
export const TummocPersonalNavIcon: React.FC<IconProps> = ({ size = 25, color = '#8E9DA8' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="7" r="4.2" fill={color} />
    <Path
      d="M4.5 20.5c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v0.5h-15v-0.5z"
      fill={color}
    />
  </Svg>
);

/**
 * 8. Bus Stop Near You Pin Icon (Teal circular badge with white bus silhouette)
 * As seen in authentic screenshot: "Bus stops near you"
 */
export const BusStopPinIcon: React.FC<{ size?: number }> = ({ size = 34 }) => (
  <Svg width={size} height={size} viewBox="0 0 34 34" fill="none">
    {/* Teal circular badge */}
    <Circle cx="17" cy="17" r="16" fill="#00A3A6" />
    {/* Inner white bus silhouette */}
    <Rect x="10.5" y="8" width="13" height="14" rx="2.5" fill="#FFFFFF" />
    {/* Windshield */}
    <Rect x="12" y="10" width="10" height="5" rx="1" fill="#00A3A6" />
    {/* Headlights */}
    <Circle cx="13" cy="18" r="1.1" fill="#00A3A6" />
    <Circle cx="21" cy="18" r="1.1" fill="#00A3A6" />
    {/* Wheels */}
    <Rect x="11.5" y="21.5" width="2.5" height="2" rx="0.8" fill="#FFFFFF" />
    <Rect x="20" y="21.5" width="2.5" height="2" rx="0.8" fill="#FFFFFF" />
  </Svg>
);

/**
 * 9. Metro Station Near You Pin Icon (Red location pin with metro train)
 */
export const MetroStationPinIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 32" fill="none">
    <Path
      d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 18 14 18s14-7.5 14-18c0-7.73-6.27-14-14-14z"
      fill="#EF4444"
    />
    <Circle cx="14" cy="13" r="8.5" fill="#FFFFFF" />
    <Rect x="10.5" y="8" width="7" height="8" rx="1.5" fill="#EF4444" />
    <Rect x="11.5" y="9.5" width="5" height="3" rx="0.5" fill="#FFFFFF" />
    <Circle cx="12" cy="14" r="0.7" fill="#FFFFFF" />
    <Circle cx="16" cy="14" r="0.7" fill="#FFFFFF" />
  </Svg>
);
