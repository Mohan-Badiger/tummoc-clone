import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
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
import { colors, typography, spacing, radii } from '../../theme';

interface DrawerMenuProps {
  visible: boolean;
  onClose: () => void;
  userName: string;
  userPhone: string;
  onEditProfile: () => void;
  onSelectProfile: () => void;
  onNavigate: (route: string) => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  visible,
  onClose,
  userName,
  userPhone,
  onEditProfile,
  onSelectProfile,
  onNavigate,
}) => {
  const menuItems = [
    { label: 'BMTC Pass', icon: Ticket, route: 'BMTC' },
    { label: 'Help & Support', icon: Headphones, route: 'Help' },
    { label: 'Change Language', icon: Languages, route: 'Language', hasDot: true },
    { label: 'Saved Places', icon: Heart, route: 'SavedPlaces' },
    { label: 'Switch City', icon: MapPin, route: 'SwitchCity' },
    { label: 'Tummoc Money', icon: Wallet, route: 'TummocMoney' },
    { label: 'Tummoc Blogs', icon: BookOpen, route: 'Blogs' },
    { label: 'Referrals', icon: Gift, route: 'Referrals' },
    { label: 'Privacy Policy', icon: FileText, route: 'Privacy' },
    { label: 'Terms of Usage', icon: FileSpreadsheet, route: 'Terms' },
    { label: 'Account Settings', icon: Settings, route: 'Settings' },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Backdrop */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>

        {/* Drawer Content */}
        <View style={styles.drawerContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* User Profile Header */}
            <TouchableOpacity
              style={styles.profileRow}
              onPress={() => {
                onClose();
                onEditProfile();
              }}
              activeOpacity={0.8}
            >
              <View style={styles.avatarRing}>
                <View style={styles.avatarInner}>
                  <User size={34} color="#94A3B8" />
                </View>
              </View>

              <View style={styles.nameBlock}>
                <Text style={styles.userName}>{userName}</Text>
                <Text style={styles.userPhone}>{userPhone}</Text>
              </View>

              <View style={styles.chevronCircle}>
                <ChevronRight size={18} color={colors.primaryCyan} strokeWidth={2.5} />
              </View>
            </TouchableOpacity>

            {/* Profile Switcher Pill */}
            <TouchableOpacity
              style={styles.profileSwitcherPill}
              onPress={() => {
                onClose();
                onSelectProfile();
              }}
              activeOpacity={0.8}
            >
              <View style={styles.pillIconCircle}>
                <User size={14} color={colors.primaryCyan} strokeWidth={2.5} />
              </View>
              <Text style={styles.pillText}>Personal Profile</Text>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <ChevronDown size={18} color={colors.textPrimary} strokeWidth={2.5} />
            </TouchableOpacity>

            <View style={styles.divider} />

            {/* Menu List */}
            <View style={styles.menuList}>
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => {
                      onClose();
                      onNavigate(item.route);
                    }}
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

            {/* Drawer Footer */}
            <View style={styles.footer}>
              <Image
                source={require('../../assets/tummoc_logo.png')}
                style={styles.drawerLogo}
                resizeMode="contain"
              />
              <Text style={styles.versionText}>v3.6.9</Text>

              {/* Social Media Circular Buttons */}
              <View style={styles.socialRow}>
                {['f', 'X', 'in', 'ig'].map((network, idx) => (
                  <View key={idx} style={styles.socialButton}>
                    <Text style={styles.socialText}>{network}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  drawerContainer: {
    width: '82%',
    maxWidth: 340,
    backgroundColor: colors.white,
    height: '100%',
    paddingTop: 48,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
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
  drawerLogo: {
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
