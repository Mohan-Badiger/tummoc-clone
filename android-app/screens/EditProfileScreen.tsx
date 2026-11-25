import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeft,
  User,
  Pencil,
  Info,
  Check,
} from 'lucide-react-native';
import { useUserStore } from '../store/userStore';
import { colors, typography, spacing, radii } from '../theme';

export const EditProfileScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { profile, setProfile } = useUserStore();

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [gender, setGender] = useState<'male' | 'female' | 'other'>(profile.gender);
  const [dob, setDob] = useState(profile.dob);
  const [linkBusiness, setLinkBusiness] = useState(false);

  const handleSave = () => {
    setProfile({
      firstName,
      lastName,
      email,
      gender,
      dob,
    });
    Alert.alert('Profile Updated', 'Your profile details have been saved successfully.');
    navigation.goBack();
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={24} color={colors.textPrimary} strokeWidth={2.2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarCircle}>
            <User size={64} color="#94A3B8" />
            <TouchableOpacity style={styles.pencilBadge} activeOpacity={0.8}>
              <Pencil size={14} color={colors.white} strokeWidth={2.5} />
            </TouchableOpacity>
          </View>
        </View>

        {/* First & Last Name */}
        <View style={styles.nameRow}>
          <View style={styles.nameInputBlock}>
            <Text style={styles.inputLabel}>First Name</Text>
            <TextInput
              style={styles.textInput}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor={colors.textSecondary}
            />
          </View>

          <View style={styles.nameInputBlock}>
            <Text style={styles.inputLabel}>Last Name</Text>
            <TextInput
              style={styles.textInput}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor={colors.textSecondary}
            />
          </View>
        </View>

        <View style={styles.infoHintRow}>
          <Info size={14} color={colors.textSecondary} />
          <Text style={styles.infoHintText}>Please provide your official name</Text>
        </View>

        {/* Personal Email ID */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Personal Email ID</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email Address"
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.phoneInputRow}>
            {/* Country Pill */}
            <View style={styles.countryPill}>
              <Text style={styles.flagEmoji}>🇮🇳</Text>
              <Text style={styles.countryCode}>91</Text>
            </View>

            {/* Phone Display with Verified Tag */}
            <View style={styles.phoneNumberContainer}>
              <Text style={styles.phoneNumberText}>{profile.phone}</Text>
              <View style={styles.verifiedTag}>
                <Check size={12} color={colors.limeGreen} strokeWidth={3} />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Gender Selector */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Gender</Text>
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[
                styles.genderPill,
                gender === 'male' && styles.genderPillSelected,
              ]}
              onPress={() => setGender('male')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'male' && styles.genderTextSelected,
                ]}
              >
                Male ♂
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderPill,
                gender === 'female' && styles.genderPillSelected,
              ]}
              onPress={() => setGender('female')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'female' && styles.genderTextSelected,
                ]}
              >
                Female ♀
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.genderPill,
                gender === 'other' && styles.genderPillSelected,
              ]}
              onPress={() => setGender('other')}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === 'other' && styles.genderTextSelected,
                ]}
              >
                Other ⚧
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Date of Birth */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date of Birth (optional)</Text>
          <TextInput
            style={styles.textInput}
            value={dob}
            onChangeText={setDob}
            placeholder="DD Mon YYYY"
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        {/* For Business Section */}
        <View style={styles.businessHeaderRow}>
          <Text style={styles.businessSectionTitle}>FOR BUSINESS</Text>
          <View style={styles.businessDivider} />
        </View>

        <TouchableOpacity
          style={styles.businessCheckboxCard}
          onPress={() => setLinkBusiness(!linkBusiness)}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.checkbox,
              linkBusiness && styles.checkboxChecked,
            ]}
          >
            {linkBusiness && <Check size={14} color={colors.white} strokeWidth={3} />}
          </View>
          <Text style={styles.businessCardText}>Link Business Profile</Text>
          <Info size={16} color={colors.textSecondary} />
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSave}
          activeOpacity={0.85}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  backButton: {
    marginRight: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  avatarSection: {
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  avatarCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pencilBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.limeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  nameRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xs,
  },
  nameInputBlock: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  textInput: {
    backgroundColor: '#F7F8F9',
    borderRadius: radii.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.size.md,
    color: colors.textPrimary,
    fontWeight: typography.weight.medium,
  },
  infoHintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.lg,
  },
  infoHintText: {
    fontSize: typography.size.xs,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  phoneInputRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  countryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    borderRadius: radii.sm,
    paddingHorizontal: spacing.md,
    gap: 6,
  },
  flagEmoji: {
    fontSize: 18,
  },
  countryCode: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
  },
  phoneNumberContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F8F9',
    borderRadius: radii.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  phoneNumberText: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
  },
  verifiedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verifiedText: {
    fontSize: typography.size.xs,
    color: colors.limeGreen,
    fontWeight: typography.weight.bold,
  },
  genderRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  genderPill: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: radii.sm,
    backgroundColor: '#F7F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderPillSelected: {
    backgroundColor: colors.limeGreen,
  },
  genderText: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
    fontWeight: typography.weight.medium,
  },
  genderTextSelected: {
    color: colors.white,
    fontWeight: typography.weight.bold,
  },
  businessHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  businessSectionTitle: {
    fontSize: typography.size.xs,
    fontWeight: '800',
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  businessDivider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
    marginLeft: spacing.sm,
  },
  businessCheckboxCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: radii.card,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.primaryCyan,
    borderColor: colors.primaryCyan,
  },
  businessCardText: {
    fontSize: typography.size.sm + 1,
    fontWeight: typography.weight.medium,
    color: colors.textPrimary,
    flex: 1,
  },
  submitButton: {
    backgroundColor: colors.primaryCyan,
    borderRadius: radii.button,
    paddingVertical: spacing.md + 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
});
