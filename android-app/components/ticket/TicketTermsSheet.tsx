import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { X } from 'lucide-react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

interface TicketTermsSheetProps {
  visible: boolean;
  onClose: () => void;
}

export const TicketTermsSheet: React.FC<TicketTermsSheetProps> = ({
  visible,
  onClose,
}) => {
  const terms = [
    'Pass is valid for travel for the services it has been purchased and until the expiry date printed on the pass',
    'In case the conductor asks for your ID proof, you can either show a physical/digital copy of the ID used at the time of booking.',
    'Only one pass is allowed for one ID card',
    'Pass holders must show their passes to conductors or any authorised person on demand',
    'Improper/misuse of pass results in withdrawal of pass, attract penalty and pass holder will be liable to legal implications',
    'BMTC is not responsible if passenger/pass holder\'s mobile application is not working or switched off',
    'BMTC is not responsible if passenger/pass holder has entered wrong ID number in mobile pass purchased and the same cannot be accepted',
    'Pass holders should abide by and accept the conditions on which the pass is issued',
    'It is not required to carry BMTC ID card for pass holders who have purchased a digital pass',
  ];

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
            <Text style={styles.title}>Terms and Conditions</Text>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <X size={22} color={colors.textPrimary} strokeWidth={2.2} />
            </TouchableOpacity>
          </View>

          {/* Terms List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {terms.map((item, index) => (
              <View key={index} style={styles.termRow}>
                <View style={styles.bulletDot} />
                <Text style={styles.termText}>{item}</Text>
              </View>
            ))}
          </ScrollView>
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
    maxHeight: '75%',
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.sheet,
    borderTopRightRadius: radii.sheet,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
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
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  termRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: colors.textPrimary,
    marginTop: 6,
  },
  termText: {
    flex: 1,
    fontSize: typography.size.sm,
    color: colors.textPrimary,
    lineHeight: 20,
    fontWeight: typography.weight.regular,
  },
});
