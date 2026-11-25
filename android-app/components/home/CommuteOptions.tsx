import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { AutoRickshawIcon } from '../common/TummocIcons';
import { colors, typography, spacing, radii } from '../../theme';

interface CommuteOptionsProps {
  onSelectOption: (option: string) => void;
}

export const CommuteOptions: React.FC<CommuteOptionsProps> = ({
  onSelectOption,
}) => {
  return (
    <View style={styles.container}>
      {/* Section Title */}
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

        {/* 3. Direct Ride (Auto Rickshaw with orange Cash badge) */}
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
            <AutoRickshawIcon size={25} />
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
    fontSize: 15,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: 12,
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
    backgroundColor: '#F4F7F8', // Authentic soft light gray tile
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  busIcon: {
    width: 24,
    height: 20,
    tintColor: colors.textPrimary,
  },
  metroIcon: {
    width: 21,
    height: 23,
    tintColor: colors.textPrimary,
  },
  railIcon: {
    width: 17,
    height: 22,
    tintColor: colors.textPrimary,
  },
  cashBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: colors.accentOrangeCash,
    paddingHorizontal: 7,
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
    marginTop: 8,
    fontSize: 11.5,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
