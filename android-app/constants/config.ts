/**
 * Core application constants matched to the original Tummoc target app.
 */
export const APP_CONFIG = {
  appName: 'Tummoc',
  appVersion: 'v3.6.9',
  androidPackageName: 'org.transhelp.bykerr.clone',
  targetCity: 'Bengaluru',
  defaultLanguage: 'English',
  defaultCoordinates: {
    latitude: 12.9716,
    longitude: 77.5946,
  },
  referenceDevice: {
    brand: 'Redmi / Xiaomi',
    screenResolution: {
      width: 1080,
      height: 2400,
    },
    aspectRatio: '20:9',
    densityCategory: 'xxhdpi',
  },
} as const;
