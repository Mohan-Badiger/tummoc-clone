/**
 * Corner radii tokens for cards, buttons, modals, and badge pills.
 */
export const radii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  card: 16,
  button: 12,
  sheet: 24,
  pill: 999,
  circle: 9999,
} as const;

export type Radii = typeof radii;
