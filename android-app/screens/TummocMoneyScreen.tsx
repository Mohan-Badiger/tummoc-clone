import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeft,
  Clock,
  FileText,
  ChevronRight,
} from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { TummocMoneyNavIcon } from '../components/common/TummocIcons';
import { colors, typography, spacing, shadows } from '../theme';

export const TummocMoneyScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* 1. Deep Dark Teal Header Background Block (extends behind the top half of the card) */}
      <View style={[styles.tealHeaderBg, { height: insets.top + 155 }]} />

      {/* 2. Top Nav Row */}
      <View style={[styles.topNavRow, { paddingTop: insets.top }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              (navigation as any).navigate('HomeTab');
            }
          }}
          hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
        >
          <ArrowLeft size={24} color={colors.white} strokeWidth={2.2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tummoc Money</Text>
      </View>

      {/* 3. Main Content ScrollView */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Available Balance Floating Card (Top half on teal, bottom half on white) */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <View>
              <Text style={styles.balanceLabel}>Available Balance</Text>
              <Text style={styles.balanceAmount}>₹ 0.0</Text>
            </View>

            <View style={styles.walletBadgeCircle}>
              <TummocMoneyNavIcon size={24} color={colors.headerDarkTeal} />
            </View>
          </View>

          {/* Add Money Solid Cyan Button */}
          <TouchableOpacity
            style={styles.addMoneyButton}
            onPress={() => Alert.alert('Add Money', 'Choose top-up amount')}
            activeOpacity={0.88}
          >
            <Text style={styles.addMoneyText}>Add Money</Text>
          </TouchableOpacity>
        </View>

        {/* Flexible space between top card and bottom options */}
        <View style={styles.flexibleSpacer} />

        {/* Options Card at bottom */}
        <View style={styles.bottomOptionsCard}>
          {/* Transaction History */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => Alert.alert('Transaction History', 'No past transactions found.')}
            activeOpacity={0.7}
          >
            <Clock size={20} color={colors.textPrimary} strokeWidth={1.8} />
            <Text style={styles.optionLabel}>Transaction History</Text>
            <ChevronRight size={18} color={colors.textSecondary} strokeWidth={2} />
          </TouchableOpacity>

          <View style={styles.optionDivider} />

          {/* Terms and Conditions */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => Alert.alert('Terms and Conditions', 'Displaying Tummoc Money terms.')}
            activeOpacity={0.7}
          >
            <FileText size={20} color={colors.textPrimary} strokeWidth={1.8} />
            <Text style={styles.optionLabel}>Terms and Conditions</Text>
            <ChevronRight size={18} color={colors.textSecondary} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  tealHeaderBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.headerDarkTeal,
  },
  topNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
    zIndex: 10,
  },
  backButton: {
    marginRight: spacing.lg,
    padding: spacing.xs,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: typography.weight.bold,
    color: colors.white,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    justifyContent: 'space-between',
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: spacing.xl,
    marginTop: 8, // Sits naturally below the top nav title, overlapping teal
    borderWidth: 1,
    borderColor: '#EAEAEA',
    ...shadows.card,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  balanceLabel: {
    fontSize: 13.5,
    color: '#64748B',
    fontWeight: '400',
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.textPrimary,
    marginTop: 4,
  },
  walletBadgeCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0F7F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMoneyButton: {
    backgroundColor: colors.primaryCyan,
    borderRadius: 10,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addMoneyText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  flexibleSpacer: {
    flex: 1,
    minHeight: 120,
  },
  bottomOptionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    ...shadows.subtle,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    gap: spacing.md,
  },
  optionLabel: {
    flex: 1,
    fontSize: 14.5,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  optionDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
});
