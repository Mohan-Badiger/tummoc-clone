import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  CommuteBusIcon,
  CommuteMetroIcon,
  DirectRideScooterIcon,
  AirportRailIcon,
} from '../common/TummocIcons';
import { colors, typography, spacing, radii } from '../../theme';

interface CommuteOptionsProps {
  onSelectOption: (option: string) => void;
}

export const CommuteOptions: React.FC<CommuteOptionsProps> = ({
  onSelectOption,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Commute options available</Text>

      <View style={styles.tilesRow}>
        {/* 1. Bus */}
        <View style={styles.tileWrapper}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => onSelectOption('Bus')}
            activeOpacity={0.7}
          >
            <CommuteBusIcon size={30} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.tileLabel}>Bus</Text>
        </View>

        {/* 2. Metro */}
        <View style={styles.tileWrapper}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => onSelectOption('Metro')}
            activeOpacity={0.7}
          >
            <CommuteMetroIcon size={30} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.tileLabel}>Metro</Text>
        </View>

        {/* 3. Direct Ride (Scooter / Bike taxi with Cash badge) */}
        <View style={styles.tileWrapper}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => onSelectOption('Direct Ride')}
            activeOpacity={0.7}
          >
            {/* Orange "Cash" Badge */}
            <View style={styles.cashBadge}>
              <Text style={styles.cashText}>Cash</Text>
            </View>
            <DirectRideScooterIcon size={28} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.tileLabel}>Direct Ride</Text>
        </View>

        {/* 4. Airport Rail */}
        <View style={styles.tileWrapper}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => onSelectOption('Airport Rail')}
            activeOpacity={0.7}
          >
            <AirportRailIcon size={30} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.tileLabel}>Airport Rail</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.size.md + 1,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  tilesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  tileWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  tile: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: colors.tileGray,
    borderRadius: radii.card,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cashBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: colors.accentOrangeCash,
    paddingHorizontal: 8,
    paddingVertical: 1.5,
    borderRadius: radii.pill,
  },
  cashText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
  },
  tileLabel: {
    marginTop: spacing.sm,
    fontSize: typography.size.xs + 0.5,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
