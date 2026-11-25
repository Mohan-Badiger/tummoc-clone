import React, { useState } from 'react';
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
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeft, Ticket, ChevronRight } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { colors, typography, spacing, radii, shadows } from '../theme';

type BookingsNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BookingsScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<BookingsNavigationProp>();

  const [activeTab, setActiveTab] = useState<'passes' | 'trips'>('passes');
  const [filter, setFilter] = useState<'active' | 'expired'>('active');

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('MainTabs', { screen: 'HomeTab' });
            }
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ArrowLeft size={24} color={colors.textPrimary} strokeWidth={2.2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bookings</Text>
      </View>

      {/* Tabs: Passes vs Trips/Tickets */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('passes')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'passes' && styles.tabTextActive,
            ]}
          >
            Passes
          </Text>
          {activeTab === 'passes' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('trips')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'trips' && styles.tabTextActive,
            ]}
          >
            Trips/Tickets
          </Text>
          {activeTab === 'trips' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      </View>

      {/* Filter Pills: Active / Expired */}
      <View style={styles.filtersRow}>
        <TouchableOpacity
          style={[
            styles.filterPill,
            filter === 'active' && styles.filterPillActive,
          ]}
          onPress={() => setFilter('active')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'active' && styles.filterTextActive,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterPill,
            filter === 'expired' && styles.filterPillActive,
          ]}
          onPress={() => setFilter('expired')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'expired' && styles.filterTextActive,
            ]}
          >
            Expired
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Body */}
      {activeTab === 'passes' ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Card 1: Orange Pass Card */}
          <View style={styles.orangePassCard}>
            <View style={styles.passTopRow}>
              <View style={styles.badgesGroup}>
                <View style={styles.passBadge}>
                  <Text style={styles.passBadgeText}>Ordinary</Text>
                </View>
                <View style={styles.passBadge}>
                  <Text style={styles.passBadgeText}>Monthly</Text>
                </View>
              </View>

              <Text style={styles.passPrice}>₹ 1500.0</Text>
            </View>

            <Text style={styles.passTitle}>Ordinary Service Monthly Pass</Text>

            <View style={styles.validityBlock}>
              <Text style={styles.validityLabel}>Pass valid till</Text>
              <Text style={styles.validityDate}>16 Dec 2026, 11:59 PM</Text>
            </View>

            {/* Bottom Status Banner */}
            <View style={styles.pendingStatusBanner}>
              <Text style={styles.pendingText}>
                Payment of ₹ 1500.00 is Pending!
              </Text>
              <TouchableOpacity
                style={styles.checkStatusButton}
                onPress={() => Alert.alert('Payment Status', 'Refreshing transaction status...')}
                activeOpacity={0.8}
              >
                <Text style={styles.checkStatusText}>Check Status</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2: Teal Pass Card (Active Pass -> Opens Pass Details Ticket) */}
          <TouchableOpacity
            style={styles.tealPassCard}
            onPress={() => navigation.navigate('PassDetails', { passId: 'BMTC-MP-2026-93798' })}
            activeOpacity={0.88}
          >
            <View style={styles.passTopRow}>
              <View style={styles.badgesGroup}>
                <View style={styles.passBadge}>
                  <Text style={styles.passBadgeText}>Ordinary</Text>
                </View>
                <View style={styles.passBadge}>
                  <Text style={styles.passBadgeText}>Monthly</Text>
                </View>
              </View>

              <Text style={styles.passPrice}>₹ 1500.0</Text>
            </View>

            <Text style={styles.passTitle}>Ordinary Service Monthly Pass</Text>

            <View style={styles.passFooterRow}>
              <View>
                <Text style={styles.validityLabel}>Pass valid till</Text>
                <Text style={styles.validityDate}>20 Dec 2026, 11:59 PM</Text>
              </View>

              <View style={styles.chevronButton}>
                <ChevronRight size={22} color={colors.white} strokeWidth={2.5} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Purchase Divider */}
          <View style={styles.purchaseDividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Looking for pass purchase?</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Book A New Pass Floating Button */}
          <TouchableOpacity
            style={styles.bookPassButton}
            onPress={() => Alert.alert('New Pass', 'Opening pass selection catalog')}
            activeOpacity={0.85}
          >
            <Ticket size={22} color={colors.white} strokeWidth={2.2} />
            <Text style={styles.bookPassText}>Book a new pass</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        /* Trips/Tickets Tab: Empty State ("Uh - oh") */
        <View style={styles.emptyContainer}>
          {/* Peeking Mascot Graphic */}
          <View style={styles.mascotPeekWrapper}>
            <View style={styles.holeOval} />
            <View style={styles.peekingFace}>
              <View style={styles.helmetTop}>
                <View style={styles.goggleRing} />
                <View style={styles.goggleRing} />
              </View>
              <View style={styles.eyesRow}>
                <View style={styles.eyeCircle}>
                  <View style={styles.pupil} />
                </View>
                <View style={styles.eyeCircle}>
                  <View style={styles.pupil} />
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.emptyTitle}>“ Uh - oh “</Text>
          <Text style={styles.emptySubtitle}>Couldn't find any trips history</Text>
        </View>
      )}
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
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    position: 'relative',
  },
  tabText: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    fontWeight: typography.weight.medium,
  },
  tabTextActive: {
    color: colors.primaryCyan,
    fontWeight: typography.weight.bold,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.primaryCyan,
  },
  filtersRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  filterPill: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.sm,
    backgroundColor: colors.tileGray,
  },
  filterPillActive: {
    backgroundColor: colors.ticketTealLight,
  },
  filterText: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
    fontWeight: typography.weight.medium,
  },
  filterTextActive: {
    color: colors.primaryCyan,
    fontWeight: typography.weight.bold,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  orangePassCard: {
    backgroundColor: colors.passOrangeEnd,
    borderRadius: radii.card,
    paddingTop: spacing.lg,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    ...shadows.card,
  },
  passTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  badgesGroup: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  passBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: spacing.md,
    paddingVertical: 3,
    borderRadius: radii.pill,
  },
  passBadgeText: {
    color: colors.white,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.bold,
  },
  passPrice: {
    color: colors.white,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
  },
  passTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.bold,
    color: colors.white,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  validityBlock: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  validityLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: typography.size.xs,
  },
  validityDate: {
    color: colors.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
    marginTop: 2,
  },
  pendingStatusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7FCFD',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  pendingText: {
    color: colors.textPrimary,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.semiBold,
  },
  checkStatusButton: {
    backgroundColor: colors.primaryCyan,
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radii.sm,
  },
  checkStatusText: {
    color: colors.white,
    fontSize: typography.size.xs + 1,
    fontWeight: typography.weight.bold,
  },
  tealPassCard: {
    backgroundColor: colors.passTealEnd,
    borderRadius: radii.card,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
    ...shadows.card,
  },
  passFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chevronButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseDividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
  },
  dividerText: {
    paddingHorizontal: spacing.md,
    fontSize: typography.size.sm,
    color: colors.textSecondary,
  },
  bookPassButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryCyan,
    paddingVertical: spacing.md + 2,
    borderRadius: radii.button,
    gap: spacing.sm,
    ...shadows.card,
  },
  bookPassText: {
    color: colors.white,
    fontSize: typography.size.md,
    fontWeight: typography.weight.bold,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingBottom: 80,
  },
  mascotPeekWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
    height: 120,
    width: 140,
  },
  holeOval: {
    position: 'absolute',
    bottom: 20,
    width: 130,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.textPrimary,
  },
  peekingFace: {
    position: 'absolute',
    bottom: 24,
    width: 76,
    height: 60,
    backgroundColor: '#0F2F38',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    alignItems: 'center',
    paddingTop: 8,
  },
  helmetTop: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 4,
  },
  goggleRing: {
    width: 16,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#94A3B8',
  },
  eyesRow: {
    flexDirection: 'row',
    gap: 6,
  },
  eyeCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pupil: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#8CC63F',
  },
  emptyTitle: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
