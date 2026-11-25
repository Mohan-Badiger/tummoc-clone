import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
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
            <Image
              source={require('../../assets/icons/bus.png')}
              style={styles.busIcon}
              resizeMode="contain"
            />
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
            <Image
              source={require('../../assets/icons/metro.png')}
              style={styles.metroIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.tileLabel}>Metro</Text>
        </View>

        {/* 3. Direct Ride (Scooter / Bike taxi with orange Cash badge) */}
        <View style={styles.tileWrapper}>
          <TouchableOpacity
            style={styles.tile}
            onPress={() => onSelectOption('Direct Ride')}
            activeOpacity={0.7}
          >
            {/* Orange "Cash" Badge sitting on top border */}
            <View style={styles.cashBadge}>
              <Text style={styles.cashText}>Cash</Text>
            </View>
            <Image
              source={require('../../assets/icons/scooter.png')}
              style={styles.scooterIcon}
              resizeMode="contain"
            />
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
            <Image
              source={require('../../assets/icons/airport_rail.png')}
              style={styles.railIcon}
              resizeMode="contain"
            />
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
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  tilesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.sm + 2,
  },
  tileWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  tile: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F3F6F8', // Authentic soft light gray tile
    borderRadius: radii.card,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  busIcon: {
    width: 32,
    height: 32,
    tintColor: colors.textPrimary,
  },
  metroIcon: {
    width: 30,
    height: 33,
    tintColor: colors.textPrimary,
  },
  scooterIcon: {
    width: 28,
    height: 34,
    tintColor: colors.textPrimary,
  },
  railIcon: {
    width: 28,
    height: 32,
    tintColor: colors.textPrimary,
  },
  cashBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: colors.accentOrangeCash,
    paddingHorizontal: 8,
    paddingVertical: 1.5,
    borderRadius: radii.pill,
    zIndex: 2,
  },
  cashText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '700',
  },
  tileLabel: {
    marginTop: spacing.sm,
    fontSize: 11.5,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
