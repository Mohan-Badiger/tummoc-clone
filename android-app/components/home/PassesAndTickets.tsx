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
            <BmtcPassIcon width={46} height={25} color={colors.textPrimary} />
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
            <MetroTicketIcon size={34} color={colors.textPrimary} />
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
            <AllInOneTicketIcon width={48} height={31} color={colors.textPrimary} />
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
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
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
    height: 62,
    backgroundColor: '#D7F1F5', // Authentic pastel cyan ticket color
    borderRadius: radii.sm + 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cutout: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.white,
    top: '50%',
    marginTop: -7,
  },
  cutoutLeft: {
    left: -7,
  },
  cutoutRight: {
    right: -7,
  },
  cardLabel: {
    marginTop: spacing.sm,
    fontSize: 12,
    fontWeight: typography.weight.semiBold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
});
