import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Check } from 'lucide-react-native';
import { colors, typography, spacing, radii } from '../../theme';

interface FeatureVoteBannerProps {
  onVotePress: () => void;
}

export const FeatureVoteBanner: React.FC<FeatureVoteBannerProps> = ({
  onVotePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textColumn}>
        <Text style={styles.promptText}>
          Let us know the greatest feature that matters to you the most.
        </Text>

        <TouchableOpacity
          style={styles.voteButton}
          onPress={onVotePress}
          activeOpacity={0.8}
        >
          <Text style={styles.voteButtonText}>Vote now</Text>
        </TouchableOpacity>
      </View>

      {/* Stylized Ballot Box Graphic */}
      <View style={styles.graphicContainer}>
        {/* Floating Ballot Sheet */}
        <View style={styles.ballotPaper}>
          <View style={styles.paperLine} />
          <View style={styles.paperLine} />
          <View style={styles.paperLineShort} />
        </View>

        {/* Ballot Box */}
        <View style={styles.ballotBox}>
          <View style={styles.ballotBoxLid} />
          <View style={styles.checkmarkCircle}>
            <Check size={18} color={colors.white} strokeWidth={3} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    marginBottom: spacing.xxl,
    backgroundColor: '#FDFEFE',
  },
  textColumn: {
    flex: 1,
    paddingRight: spacing.md,
  },
  promptText: {
    fontSize: typography.size.sm + 1,
    color: colors.textPrimary,
    fontWeight: typography.weight.medium,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  voteButton: {
    backgroundColor: colors.limeGreen,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: radii.sm,
    alignSelf: 'flex-start',
  },
  voteButtonText: {
    color: colors.white,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
  },
  graphicContainer: {
    width: 90,
    height: 90,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ballotPaper: {
    position: 'absolute',
    top: 4,
    width: 44,
    height: 38,
    backgroundColor: '#F1F9FF',
    borderWidth: 1,
    borderColor: '#BDE3FF',
    borderRadius: 4,
    padding: 4,
    gap: 3,
  },
  paperLine: {
    height: 3,
    backgroundColor: '#60A5FA',
    borderRadius: 1.5,
  },
  paperLineShort: {
    height: 3,
    width: '60%',
    backgroundColor: '#93C5FD',
    borderRadius: 1.5,
  },
  ballotBox: {
    width: 72,
    height: 52,
    backgroundColor: colors.accentYellow,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ballotBoxLid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 8,
    backgroundColor: '#E5A500',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  checkmarkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
});
