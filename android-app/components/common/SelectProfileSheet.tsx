import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { X, User, Briefcase, Info } from 'lucide-react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

interface SelectProfileSheetProps {
  visible: boolean;
  onClose: () => void;
  selectedProfile: 'personal' | 'business';
  onSelect: (type: 'personal' | 'business') => void;
  onLinkBusiness: () => void;
}

export const SelectProfileSheet: React.FC<SelectProfileSheetProps> = ({
  visible,
  onClose,
  selectedProfile,
  onSelect,
  onLinkBusiness,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        <View style={styles.sheetContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Select Profile</Text>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <X size={22} color={colors.textPrimary} strokeWidth={2.2} />
            </TouchableOpacity>
          </View>

          {/* Option 1: Personal Profile */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedProfile === 'personal' && styles.optionCardSelected,
            ]}
            onPress={() => {
              onSelect('personal');
              onClose();
            }}
            activeOpacity={0.8}
          >
            <View style={styles.iconCircleCyan}>
              <User size={20} color={colors.primaryCyan} strokeWidth={2.5} />
            </View>
            <Text style={styles.optionTitle}>Personal Profile</Text>
          </TouchableOpacity>

          {/* Option 2: Business Profile */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              selectedProfile === 'business' && styles.optionCardSelected,
            ]}
            onPress={() => {
              onSelect('business');
              onClose();
            }}
            activeOpacity={0.8}
          >
            <View style={styles.iconCircleGray}>
              <Briefcase size={20} color={colors.primaryCyan} strokeWidth={2.5} />
            </View>

            <View style={styles.businessTextGroup}>
              <Text style={styles.optionTitle}>Business Profile</Text>
              <Info size={16} color={colors.textSecondary} strokeWidth={2} />
            </View>

            <TouchableOpacity
              style={styles.linkNowButton}
              onPress={onLinkBusiness}
              activeOpacity={0.8}
            >
              <Text style={styles.linkNowText}>Link Now</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  sheetContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.sheet,
    borderTopRightRadius: radii.sheet,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
    ...shadows.sheet,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md + 2,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.card,
    borderWidth: 1.5,
    borderColor: colors.borderLight,
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  optionCardSelected: {
    borderColor: colors.primaryCyan,
    backgroundColor: colors.primaryCyanLight,
  },
  iconCircleCyan: {
    width: 38,
    height: 38,
    borderRadius: radii.circle,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  iconCircleGray: {
    width: 38,
    height: 38,
    borderRadius: radii.circle,
    backgroundColor: '#E0F7F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  businessTextGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  optionTitle: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
    flex: 1,
  },
  linkNowButton: {
    backgroundColor: colors.limeGreen,
    paddingVertical: 7,
    paddingHorizontal: spacing.md,
    borderRadius: radii.sm,
  },
  linkNowText: {
    color: colors.white,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.bold,
  },
});
