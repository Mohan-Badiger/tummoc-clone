import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Search, Heart } from 'lucide-react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

interface SearchCardProps {
  placeholder?: string;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

export const SearchCard: React.FC<SearchCardProps> = ({
  placeholder = 'Plan your trip',
  onPress,
  onFavoritePress,
}) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <View style={styles.searchSection}>
          <Search size={22} color={colors.textSecondary} strokeWidth={2} />
          <Text style={styles.placeholderText}>{placeholder}</Text>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={onFavoritePress}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <View style={styles.heartCircle}>
            <Heart size={16} color={colors.favoriteRed} fill={colors.favoriteRed} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: spacing.lg,
    marginTop: -26, // Overlaps the dark teal header
    marginBottom: spacing.lg,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.card,
    paddingVertical: spacing.md - 1,
    paddingHorizontal: spacing.lg,
    ...shadows.card,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  placeholderText: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
    fontWeight: typography.weight.regular,
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: colors.borderSubtle,
    marginHorizontal: spacing.sm,
  },
  favoriteButton: {
    paddingLeft: spacing.xs,
  },
  heartCircle: {
    width: 32,
    height: 32,
    borderRadius: radii.circle,
    backgroundColor: colors.favoritePink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
