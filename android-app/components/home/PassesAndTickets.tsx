import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  BmtcPassIcon,
  MetroTicketIcon,
  AllInOneTicketIcon,
} from '../common/TummocIcons';
import { colors, typography, spacing, radii } from '../../theme';

interface PassesAndTicketsProps {
  onSelectPass: (type: string) => void;
}

export const PassesAndTickets: React.FC<PassesAndTicketsProps> = ({
  onSelectPass,
}) => {
  return (
    <View style={styles.container}>
      {/* Authentic Section Title */}
      <Text style={styles.sectionTitle}>Passes & Tickets</Text>

      <View style={styles.cardsRow}>
        {/* Card 1: BMTC Pass */}
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.ticketCard}
            onPress={() => onSelectPass('BMTC Pass')}
            activeOpacity={0.8}
          >
            <View style={[styles.cutout, styles.cutoutLeft]} />
            <View style={[styles.cutout, styles.cutoutRight]} />
            <BmtcPassIcon width={34} height={19} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.cardLabel}>BMTC Pass</Text>
        </View>

        {/* Card 2: Metro Ticket */}
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.ticketCard}
            onPress={() => onSelectPass('Metro Ticket')}
            activeOpacity={0.8}
          >
            <View style={[styles.cutout, styles.cutoutLeft]} />
            <View style={[styles.cutout, styles.cutoutRight]} />
            <MetroTicketIcon size={25} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.cardLabel}>Metro Ticket</Text>
        </View>

        {/* Card 3: All-in-One Ticket */}
        <View style={styles.cardWrapper}>
          <TouchableOpacity
            style={styles.ticketCard}
            onPress={() => onSelectPass('All-in-One Ticket')}
            activeOpacity={0.8}
          >
            <View style={[styles.cutout, styles.cutoutLeft]} />
            <View style={[styles.cutout, styles.cutoutRight]} />
            <AllInOneTicketIcon width={36} height={22} color={colors.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.cardLabel}>All-in-One Ticket</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: 12,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  ticketCard: {
    width: '100%',
    height: 52,
    backgroundColor: '#D7F1F5', // Authentic pastel cyan ticket color
    borderRadius: radii.sm + 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cutout: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
    top: '50%',
    marginTop: -6,
  },
  cutoutLeft: {
    left: -6,
  },
  cutoutRight: {
    right: -6,
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 11.5,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
