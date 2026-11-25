import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Cloud, ChevronDown, Leaf } from 'lucide-react-native';
import { colors, typography, spacing, radii } from '../../theme';

interface HomeHeaderProps {
  userName: string;
  cityName: string;
  temperature: string;
  carbonSaved: string;
  onOpenDrawer: () => void;
  onSelectCity?: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  userName,
  cityName,
  temperature,
  carbonSaved,
  onOpenDrawer,
  onSelectCity,
}) => {
  return (
    <View style={styles.container}>
      {/* Top Bar: Menu & Weather */}
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={onOpenDrawer}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <View style={styles.menuIconContainer}>
            <View style={styles.menuBar} />
            <View style={[styles.menuBar, { width: 14 }]} />
            <View style={styles.menuBar} />
            <View style={styles.redDot} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.weatherPill}
          onPress={onSelectCity}
          activeOpacity={0.8}
        >
          <Cloud size={16} color={colors.white} strokeWidth={2} />
          <Text style={styles.weatherText}>
            {temperature} | {cityName}
          </Text>
          <ChevronDown size={14} color={colors.white} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {/* Greeting & Eco Pill */}
      <View style={styles.greetingRow}>
        <Text style={styles.greetingText}>
          Good Afternoon {userName}
        </Text>

        <View style={styles.ecoPill}>
          <Leaf size={14} color={colors.limeGreen} fill={colors.limeGreen} />
          <Text style={styles.ecoText}>{carbonSaved}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.headerDarkTeal,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl + spacing.lg, // Extra room for search card overlap
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  menuButton: {
    padding: spacing.xs,
  },
  menuIconContainer: {
    width: 22,
    height: 18,
    justifyContent: 'space-between',
    position: 'relative',
  },
  menuBar: {
    height: 2.2,
    width: 20,
    backgroundColor: colors.white,
    borderRadius: 1,
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: colors.accentRed,
  },
  weatherPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.weatherPillDark,
    paddingVertical: 5,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    gap: 6,
  },
  weatherText: {
    color: colors.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingText: {
    color: colors.white,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.semiBold,
    letterSpacing: -0.2,
  },
  ecoPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ecoPillDark,
    borderColor: colors.accentYellow,
    borderWidth: 1.2,
    paddingVertical: 4,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    gap: 6,
  },
  ecoText: {
    color: colors.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
  },
});
