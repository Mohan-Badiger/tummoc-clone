/**
 * Centralized color tokens extracted directly from Tummoc Android application screenshots.
 * Reference Device: Redmi / Xiaomi FHD+ (1080 x 2400)
 */
export const colors = {
  // Brand & Primary
  primaryCyan: '#00A9B5',
  primaryCyanDark: '#008B95',
  primaryCyanLight: '#E6F8FA',
  primaryCyanMuted: '#DDF4F6',
  ticketTealLight: '#DDF4F6',

  // Deep Navy / Dark Teal (Headers, Splash, Mascot contrast)
  headerDarkTeal: '#0D2E37',
  headerDarkPattern: '#0A252D',
  splashBackground: '#0B2B34',
  ecoPillDark: '#072128',
  weatherPillDark: '#1A3B45',

  // Secondary Accents
  limeGreen: '#8CC63F',
  limeGreenLight: '#F0F9E8',
  accentOrange: '#FF7A00',
  accentOrangeCash: '#F57C00',
  accentYellow: '#FFB800',
  accentRed: '#FF3B30',
  favoritePink: '#FFF0F0',
  favoriteRed: '#E53E3E',

  // Ticket & Pass Gradients
  passOrangeStart: '#C84E0F',
  passOrangeEnd: '#DE6E25',
  passTealStart: '#08323B',
  passTealEnd: '#0B505F',

  // Neutrals & Surfaces
  white: '#FFFFFF',
  backgroundLight: '#FFFFFF',
  backgroundOffWhite: '#F8FAFC',
  tileGray: '#F4F6F8',
  borderLight: '#EEEEEE',
  borderSubtle: '#E2E8F0',
  divider: '#F0F2F5',

  // Text Hierarchy
  textPrimary: '#0F2F38',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  textWhite: '#FFFFFF',
  textWhiteTranslucent: 'rgba(255, 255, 255, 0.8)',

  // Overlays & Sheets
  backdropDark: 'rgba(0, 0, 0, 0.55)',
  bottomSheetHandle: '#CBD5E1',
} as const;

export type Colors = typeof colors;
