import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { X } from 'lucide-react-native';
import { colors, typography, spacing, radii } from '../../theme';

interface BusinessProfileBannerProps {
  onLinkPress: () => void;
}

export const BusinessProfileBanner: React.FC<BusinessProfileBannerProps> = ({
  onLinkPress,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <View style={styles.container}>
      {/* Official Mascot Avatar Badge */}
      <View style={styles.mascotCircle}>
        <Image
          source={require('../../assets/tummoc_mascot.png')}
          style={styles.mascotImage}
          resizeMode="contain"
        />
      </View>

      {/* Info Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Business Profile</Text>
        <Text style={styles.subtitle}>Link profile for work use</Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={onLinkPress}
        activeOpacity={0.8}
      >
        <Text style={styles.linkButtonText}>Link Now</Text>
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setDismissed(true)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <X size={16} color={colors.textPrimary} strokeWidth={2.2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md + 2,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
  },
  mascotCircle: {
    width: 44,
    height: 44,
    borderRadius: radii.circle,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  mascotImage: {
    width: 36,
    height: 36,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: typography.size.sm + 1,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: typography.size.xs + 1,
    color: colors.textSecondary,
    marginTop: 2,
  },
  linkButton: {
    backgroundColor: colors.primaryCyan,
    paddingVertical: 7,
    paddingHorizontal: spacing.md,
    borderRadius: radii.sm + 1,
    marginRight: spacing.sm,
  },
  linkButtonText: {
    color: colors.white,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.bold,
  },
  closeButton: {
    padding: spacing.xs,
  },
});
