import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Bus, ChevronRight } from 'lucide-react-native';
import { colors, typography, spacing, radii } from '../../theme';

interface TravelOutstationCardProps {
  onPress: () => void;
}

export const TravelOutstationCard: React.FC<TravelOutstationCardProps> = ({
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Travel Outstation</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <View style={styles.iconCircle}>
          <Bus size={32} color={colors.headerDarkTeal} strokeWidth={2} />
        </View>

        <Text style={styles.title}>Book outstation bus tickets</Text>

        <ChevronRight size={22} color={colors.textPrimary} strokeWidth={2.5} />
      </TouchableOpacity>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF9FB',
    borderRadius: radii.card,
    borderWidth: 1.5,
    borderColor: colors.primaryCyan,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: radii.circle,
    backgroundColor: '#D2F2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  title: {
    flex: 1,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
});
