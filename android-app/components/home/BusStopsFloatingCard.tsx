import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { BusStopPinIcon } from '../common/TummocIcons';
import { colors, typography, spacing, radii, shadows } from '../../theme';

interface BusStopsFloatingCardProps {
  onPress: () => void;
}

export const BusStopsFloatingCard: React.FC<BusStopsFloatingCardProps> = ({
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <View style={styles.pinWrapper}>
          <BusStopPinIcon size={34} />
        </View>

        <Text style={styles.title}>Bus stops near you</Text>

        <View style={styles.actionButton}>
          <ChevronRight size={20} color={colors.white} strokeWidth={2.8} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingVertical: spacing.md - 2,
    paddingHorizontal: spacing.lg,
    ...shadows.card,
  },
  pinWrapper: {
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: radii.sm,
    backgroundColor: colors.primaryCyan,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
