import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SplashScreenProps {
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (onFinish) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Centered Mascot Disc and Tummoc Logo */}
      <View style={styles.centerContent}>
        {/* White Disc with Aviator Mascot */}
        <View style={styles.mascotDisc}>
          <Image
            source={require('../assets/tummoc_mascot.png')}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* Official Tummoc Wordmark */}
        <Image
          source={require('../assets/tummoc_logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Footer: Made with love in India */}
      <View style={[styles.footer, { bottom: insets.bottom + 24 }]}>
        <Text style={styles.flagEmoji}>🇮🇳</Text>
        <Text style={styles.footerText}>Made with love in India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07222B', // Authentic deep dark teal matching splash screenshot
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  mascotDisc: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  mascotImage: {
    width: 82,
    height: 82,
  },
  logoImage: {
    width: 175,
    height: 48,
    marginTop: 24,
  },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  flagEmoji: {
    fontSize: 16,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
});
