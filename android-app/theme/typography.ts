import { TextStyle } from 'react-native';

/**
 * Typography scale and weights aligned with Android design patterns and Tummoc reference.
 */
export const typography = {
  // Font Sizes
  size: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    display: 32,
  },

  // Font Weights (Android standard system fonts: Roboto / MiSans)
  weight: {
    regular: '400' as TextStyle['fontWeight'],
    medium: '500' as TextStyle['fontWeight'],
    semiBold: '600' as TextStyle['fontWeight'],
    bold: '700' as TextStyle['fontWeight'],
    extraBold: '800' as TextStyle['fontWeight'],
  },

  // Line Heights
  lineHeight: {
    tight: 16,
    normal: 20,
    relaxed: 24,
    loose: 28,
    display: 38,
  },
} as const;

export type Typography = typeof typography;
