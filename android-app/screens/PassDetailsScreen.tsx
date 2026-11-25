import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Info,
  Mail,
} from 'lucide-react-native';
import { DynamicQRCode } from '../components/ticket/DynamicQRCode';
import { colors, typography, spacing, radii } from '../theme';

export const PassDetailsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [termsExpanded, setTermsExpanded] = useState(false);

  const officialTerms = [
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
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Top Navbar */}
      <View style={styles.topNavbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <ArrowLeft size={22} color={colors.white} strokeWidth={2.2} />
        </TouchableOpacity>

        <Text style={styles.navTitle}>Your Bus Pass</Text>

        <TouchableOpacity
          style={styles.supportButton}
          onPress={() => Alert.alert('Support', 'Contacting BMTC Pass Support desk.')}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={styles.supportText}>Support</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 36 },
        ]}
      >
        {/* CARD 1: Pass Summary & Validate Card */}
        <View style={styles.card}>
          {/* Header Row: BMTC Logo + Title & Badges */}
          <View style={styles.cardHeaderRow}>
            <Image
              source={require('../assets/bmtc_logo.png')}
              style={styles.bmtcLogo}
              resizeMode="contain"
            />

            <View style={styles.titleColumn}>
              <Text style={styles.passTitle}>Ordinary Service Monthly Pass</Text>
              <View style={styles.badgesRow}>
                <View style={styles.monthlyBadge}>
                  <Text style={styles.monthlyBadgeText}>Monthly</Text>
                </View>
                <View style={styles.ordinaryBadge}>
                  <Text style={styles.ordinaryBadgeText}>Ordinary</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Pass ID Row */}
          <View style={styles.passIdRow}>
            <Text style={styles.passIdLabel}>Pass ID:</Text>
            <Text style={styles.passIdValue}>TPASS165985424</Text>
          </View>

          {/* Validate Pass Button */}
          <TouchableOpacity
            style={styles.validateButton}
            onPress={() => Alert.alert('Validate Pass', 'Pass validation initiated.')}
            activeOpacity={0.85}
          >
            <Text style={styles.validateButtonText}>Validate Pass</Text>
          </TouchableOpacity>

          {/* How to Validate Info Link */}
          <TouchableOpacity
            style={styles.howToValidateRow}
            onPress={() => Alert.alert('How to Validate', 'Show the dynamic QR code to the conductor machine to validate your trip.')}
            activeOpacity={0.7}
          >
            <Info size={14} color={colors.primaryCyan} strokeWidth={2.2} />
            <Text style={styles.howToValidateText}>How to Validate Your Pass?</Text>
          </TouchableOpacity>
        </View>

        {/* CARD 2: Booking Details + Dynamic QR Code */}
        <View style={styles.card}>
          <Text style={styles.sectionHeading}>Booking Details</Text>

          <View style={styles.dashedDivider} />

          {/* Two-Column Details Row */}
          <View style={styles.detailsSplitRow}>
            {/* Left Column: Stacked Data */}
            <View style={styles.leftDataCol}>
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Passenger name</Text>
                <Text style={styles.fieldValue}>Mohan Badiger</Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Identification type</Text>
                <Text style={styles.fieldValue}>Aadhar Card</Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Identification number (Last 4 digits)</Text>
                <Text style={styles.fieldValue}>1660</Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Pass purchase date</Text>
                <Text style={styles.fieldValue}>21 Nov 2026, 08:52 AM</Text>
              </View>

              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Pass valid from</Text>
                <Text style={styles.fieldValue}>21 Nov 2026, 12:00 AM</Text>
              </View>

              <View style={[styles.fieldGroup, { marginBottom: 0 }]}>
                <Text style={styles.fieldLabel}>Pass valid till</Text>
                <Text style={styles.fieldValue}>20 Dec 2026, 11:59 PM</Text>
              </View>
            </View>

            {/* Right Column: Photo & Pass Fare */}
            <View style={styles.rightPhotoCol}>
              <View style={styles.photoContainer}>
                <Image
                  source={require('../assets/passenger_photo.png')}
                  style={styles.passengerImage}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.fareContainer}>
                <Text style={styles.fareLabel}>Pass fare</Text>
                <Text style={styles.fareValue}>₹ 1500.0</Text>
              </View>
            </View>
          </View>

          {/* Divider above Generate Mail Receipt */}
          <View style={styles.dashedDivider} />

          {/* Generate Mail Receipt Button */}
          <TouchableOpacity
            style={styles.mailReceiptButton}
            onPress={() => Alert.alert('Mail Receipt', 'Pass receipt has been sent to your registered email.')}
            activeOpacity={0.8}
          >
            <Mail size={15} color={colors.primaryCyan} strokeWidth={2} />
            <Text style={styles.mailReceiptText}>Generate mail receipt</Text>
          </TouchableOpacity>

          {/* Divider below Generate Mail Receipt */}
          <View style={styles.dashedDivider} />

          {/* Dynamic Refreshing QR Code */}
          <View style={styles.qrContainer}>
            <DynamicQRCode size={200} intervalMs={800} />
          </View>
        </View>

        {/* CARD 3: Terms and Conditions Accordion */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.termsHeader}
            onPress={() => setTermsExpanded(!termsExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.termsTitle}>Terms and Conditions</Text>
            {termsExpanded ? (
              <ChevronUp size={20} color={colors.textSecondary} />
            ) : (
              <ChevronDown size={20} color={colors.textSecondary} />
            )}
          </TouchableOpacity>

          {termsExpanded && (
            <View style={styles.termsContent}>
              <View style={styles.dashedDivider} />
              {officialTerms.map((term, idx) => (
                <View key={idx} style={styles.termItemRow}>
                  <View style={styles.termBullet} />
                  <Text style={styles.termItemText}>{term}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.headerDarkTeal,
  },
  topNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.headerDarkTeal,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    padding: spacing.xs,
  },
  navTitle: {
    flex: 1,
    marginLeft: spacing.lg,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.white,
  },
  supportButton: {
    padding: spacing.xs,
  },
  supportText: {
    color: colors.primaryCyan,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
  },
  scrollContent: {
    backgroundColor: '#F5F6F8',
    paddingHorizontal: spacing.md + 2,
    paddingTop: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  bmtcLogo: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  titleColumn: {
    flex: 1,
  },
  passTitle: {
    fontSize: 17.5,
    fontWeight: typography.weight.bold,
    color: '#111827',
    lineHeight: 22,
  },
  badgesRow: {
    flexDirection: 'row',
    gap: spacing.sm + 2,
    marginTop: 7,
  },
  monthlyBadge: {
    backgroundColor: '#E8F8EA',
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    borderRadius: 5,
  },
  monthlyBadgeText: {
    color: '#2E7D32',
    fontSize: 13,
    fontWeight: '700',
  },
  ordinaryBadge: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    borderRadius: 5,
  },
  ordinaryBadgeText: {
    color: '#616161',
    fontSize: 13,
    fontWeight: '700',
  },
  passIdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  passIdLabel: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
  },
  passIdValue: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
    marginLeft: 6,
  },
  validateButton: {
    backgroundColor: colors.primaryCyan,
    borderRadius: 8,
    paddingVertical: spacing.md - 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  validateButtonText: {
    color: colors.white,
    fontSize: typography.size.sm + 1,
    fontWeight: typography.weight.bold,
  },
  howToValidateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm + 2,
    gap: 4,
  },
  howToValidateText: {
    color: colors.primaryCyan,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.semiBold,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  dashedDivider: {
    height: 1,
    borderWidth: 0.8,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    marginVertical: spacing.md,
  },
  detailsSplitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftDataCol: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  fieldGroup: {
    marginBottom: spacing.sm + 3,
  },
  fieldLabel: {
    fontSize: typography.size.xs,
    color: '#888888',
    marginBottom: 1,
  },
  fieldValue: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
    color: '#111827',
  },
  rightPhotoCol: {
    width: 90,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  passengerImage: {
    width: '100%',
    height: '100%',
  },
  fareContainer: {
    alignItems: 'flex-end',
    marginTop: spacing.xl,
  },
  fareLabel: {
    fontSize: typography.size.xs,
    color: '#888888',
  },
  fareValue: {
    fontSize: typography.size.lg + 1,
    fontWeight: typography.weight.bold,
    color: '#111827',
    marginTop: 2,
  },
  mailReceiptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primaryCyan,
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: spacing.lg,
    gap: 6,
    marginTop: spacing.sm,
  },
  mailReceiptText: {
    color: colors.primaryCyan,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.semiBold,
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
  },
  termsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  termsTitle: {
    fontSize: typography.size.sm + 1,
    fontWeight: typography.weight.medium,
    color: '#374151',
  },
  termsContent: {
    marginTop: spacing.xs,
  },
  termItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  termBullet: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#374151',
    marginTop: 6,
  },
  termItemText: {
    flex: 1,
    fontSize: typography.size.xs + 0.5,
    color: '#374151',
    lineHeight: 18,
  },
});
