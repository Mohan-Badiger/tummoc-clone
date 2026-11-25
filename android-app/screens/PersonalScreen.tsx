import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  User,
  ChevronRight,
  ChevronDown,
  Ticket,
  Headphones,
  Languages,
  Heart,
  MapPin,
  Wallet,
  BookOpen,
  Gift,
  FileText,
  FileSpreadsheet,
  Settings,
} from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { useUserStore } from '../store/userStore';
import { SelectProfileSheet } from '../components/common/SelectProfileSheet';
import { colors, typography, spacing, radii } from '../theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const PersonalScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const { profile, setActiveProfile } = useUserStore();

  const [profileSheetVisible, setProfileSheetVisible] = useState(false);

  const menuItems = [
    { label: 'BMTC Pass', icon: Ticket, action: () => Alert.alert('BMTC', 'Passes') },
    { label: 'Help & Support', icon: Headphones, action: () => Alert.alert('Help', 'Support') },
    { label: 'Change Language', icon: Languages, action: () => Alert.alert('Language', 'Select Language'), hasDot: true },
    { label: 'Saved Places', icon: Heart, action: () => Alert.alert('Saved Places', 'View saved places') },
    { label: 'Switch City', icon: MapPin, action: () => Alert.alert('City', 'Change city') },
    { label: 'Tummoc Money', icon: Wallet, action: () => navigation.navigate('MainTabs', { screen: 'TummocMoneyTab' }) },
    { label: 'Tummoc Blogs', icon: BookOpen, action: () => Alert.alert('Blogs', 'Read latest blogs') },
    { label: 'Referrals', icon: Gift, action: () => Alert.alert('Referrals', 'Invite friends and earn') },
    { label: 'Privacy Policy', icon: FileText, action: () => Alert.alert('Privacy', 'Privacy policy') },
    { label: 'Terms of Usage', icon: FileSpreadsheet, action: () => Alert.alert('Terms', 'Terms of usage') },
    { label: 'Account Settings', icon: Settings, action: () => Alert.alert('Settings', 'Account settings') },
  ];

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Personal Profile</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Card */}
        <TouchableOpacity
          style={styles.profileRow}
          onPress={() => navigation.navigate('EditProfile')}
          activeOpacity={0.8}
        >
          <View style={styles.avatarRing}>
            <View style={styles.avatarInner}>
              <User size={34} color="#94A3B8" />
            </View>
          </View>

          <View style={styles.nameBlock}>
            <Text style={styles.userName}>{`${profile.firstName} ${profile.lastName}`}</Text>
            <Text style={styles.userPhone}>{profile.phone}</Text>
          </View>

          <View style={styles.chevronCircle}>
            <ChevronRight size={18} color={colors.primaryCyan} strokeWidth={2.5} />
          </View>
        </TouchableOpacity>

        {/* Profile Switcher Pill */}
        <TouchableOpacity
          style={styles.profileSwitcherPill}
          onPress={() => setProfileSheetVisible(true)}
          activeOpacity={0.8}
        >
          <View style={styles.pillIconCircle}>
            <User size={14} color={colors.primaryCyan} strokeWidth={2.5} />
          </View>
          <Text style={styles.pillText}>
            {profile.activeProfile === 'personal' ? 'Personal Profile' : 'Business Profile'}
          </Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
          <ChevronDown size={18} color={colors.textPrimary} strokeWidth={2.5} />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Menu Items List */}
        <View style={styles.menuList}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={item.action}
                activeOpacity={0.7}
              >
                <IconComponent
                  size={22}
                  color={colors.textPrimary}
                  strokeWidth={1.8}
                />
                <Text style={styles.menuLabel}>{item.label}</Text>

                {item.hasDot && <View style={styles.redBadgeDot} />}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Image
            source={require('../assets/tummoc_logo.png')}
            style={styles.footerLogo}
            resizeMode="contain"
          />
          <Text style={styles.versionText}>v3.6.9</Text>

          <View style={styles.socialRow}>
            {['f', 'X', 'in', 'ig'].map((network, idx) => (
              <View key={idx} style={styles.socialButton}>
                <Text style={styles.socialText}>{network}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Select Profile Bottom Sheet */}
      <SelectProfileSheet
        visible={profileSheetVisible}
        onClose={() => setProfileSheetVisible(false)}
        selectedProfile={profile.activeProfile}
        onSelect={setActiveProfile}
        onLinkBusiness={() => {
          setProfileSheetVisible(false);
          Alert.alert('Business Profile', 'Linking business account profile...');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  headerTitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatarRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2.5,
    borderColor: '#FF5C5C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBlock: {
    flex: 1,
  },
  userName: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
  },
  userPhone: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chevronCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.primaryCyanLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSwitcherPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryCyanLight,
    paddingVertical: spacing.sm + 1,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    marginBottom: spacing.lg,
  },
  pillIconCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  pillText: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
    flex: 1,
  },
  newBadge: {
    backgroundColor: colors.accentOrange,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    marginRight: spacing.sm,
  },
  newBadgeText: {
    color: colors.white,
    fontSize: 9,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginBottom: spacing.lg,
  },
  menuList: {
    gap: spacing.lg + 2,
    marginBottom: spacing.xxl,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
  },
  menuLabel: {
    flex: 1,
    fontSize: typography.size.md,
    color: colors.textPrimary,
    fontWeight: typography.weight.medium,
  },
  redBadgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accentRed,
  },
  footer: {
    alignItems: 'center',
    paddingTop: spacing.lg,
    gap: spacing.md,
  },
  footerLogo: {
    width: 120,
    height: 32,
    marginBottom: spacing.xs,
  },
  versionText: {
    fontSize: typography.size.xs + 1,
    color: colors.textSecondary,
  },
  socialRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  socialButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.headerDarkTeal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '800',
  },
});
