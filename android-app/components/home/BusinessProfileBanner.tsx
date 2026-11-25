import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { X } from 'lucide-react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

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

      {/* Info Text Column */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Business Profile</Text>
        <Text style={styles.subtitle}>Link profile for work use</Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={onLinkPress}
        activeOpacity={0.85}
      >
        <Text style={styles.linkButtonText}>Link Now</Text>
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setDismissed(true)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <X size={16} color="#333333" strokeWidth={2.4} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: spacing.lg,
    marginTop: -spacing.xs,
    marginBottom: spacing.lg,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    ...shadows.subtle,
  },
  mascotCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E0F7F9', // Authentic light cyan circle
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  mascotImage: {
    width: 34,
    height: 34,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
  },
  linkButton: {
    backgroundColor: colors.primaryCyan,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 8,
  },
  linkButtonText: {
    color: colors.white,
    fontSize: 12.5,
    fontWeight: typography.weight.bold,
  },
  closeButton: {
    padding: 2,
  },
});
