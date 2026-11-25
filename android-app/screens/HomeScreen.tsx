import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { HomeHeader } from '../components/home/HomeHeader';
import { SearchCard } from '../components/home/SearchCard';
import { BusinessProfileBanner } from '../components/home/BusinessProfileBanner';
import { PassesAndTickets } from '../components/home/PassesAndTickets';
import { CommuteOptions } from '../components/home/CommuteOptions';
import { TravelOutstationCard } from '../components/home/TravelOutstationCard';
import { BusStopsFloatingCard } from '../components/home/BusStopsFloatingCard';
import { FeatureVoteBanner } from '../components/home/FeatureVoteBanner';
import { DrawerMenu } from '../components/common/DrawerMenu';
import { SelectProfileSheet } from '../components/common/SelectProfileSheet';
import { useUserStore } from '../store/userStore';
import { colors } from '../theme';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { profile, setActiveProfile } = useUserStore();

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [profileSheetVisible, setProfileSheetVisible] = useState(false);

  const handleSelectOption = useCallback((option: string) => {
    Alert.alert(option, `Opening ${option} schedule and booking options.`);
  }, []);

  const handleSelectPass = useCallback((type: string) => {
    Alert.alert(type, `Booking for ${type} is ready.`);
  }, []);

  const handleDrawerNavigate = useCallback((route: string) => {
    if (route === 'TummocMoney') {
      navigation.navigate('MainTabs', { screen: 'TummocMoneyTab' });
    } else {
      Alert.alert('Navigation', `Navigating to ${route}`);
    }
  }, [navigation]);

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
      >
        {/* Top Header */}
        <HomeHeader
          userName={profile.firstName}
          cityName={profile.city}
          temperature="26.7 °C"
          carbonSaved={profile.carbonSaved}
          onOpenDrawer={() => setDrawerVisible(true)}
          onSelectCity={() => Alert.alert('City', 'Change current location')}
        />

        {/* Floating Search Bar */}
        <SearchCard
          placeholder="Plan your trip"
          onPress={() => Alert.alert('Search', 'Opening trip planner')}
          onFavoritePress={() => Alert.alert('Favorites', 'View saved places')}
        />

        {/* Business Profile Banner */}
        <BusinessProfileBanner onLinkPress={() => setProfileSheetVisible(true)} />

        {/* Passes & Tickets Section */}
        <PassesAndTickets onSelectPass={handleSelectPass} />

        {/* Commute Options Tiles */}
        <CommuteOptions onSelectOption={handleSelectOption} />

        {/* Travel Outstation Banner */}
        <TravelOutstationCard
          onPress={() => Alert.alert('Outstation', 'Search outstation buses')}
        />

        {/* Bus Stops Near You Card */}
        <BusStopsFloatingCard
          onPress={() => Alert.alert('Bus Stops', 'Finding nearby bus stops...')}
        />

        {/* Community Feature Voting Banner */}
        <FeatureVoteBanner
          onVotePress={() => Alert.alert('Vote', 'Cast your vote for future features!')}
        />
      </ScrollView>

      {/* Slide-out Navigation Drawer */}
      <DrawerMenu
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        userName={`${profile.firstName} ${profile.lastName}`}
        userPhone={profile.phone}
        onEditProfile={() => navigation.navigate('EditProfile')}
        onSelectProfile={() => setProfileSheetVisible(true)}
        onNavigate={handleDrawerNavigate}
      />

      {/* Select Profile Bottom Sheet */}
      <SelectProfileSheet
        visible={profileSheetVisible}
        onClose={() => setProfileSheetVisible(false)}
        selectedProfile={profile.activeProfile}
        onSelect={setActiveProfile}
        onLinkBusiness={() => {
          setProfileSheetVisible(false);
          Alert.alert('Business Profile', 'Linking business account profile...');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.headerDarkTeal, // Seamless transition with status bar
  },
  scrollContent: {
    backgroundColor: colors.white,
    paddingBottom: 24,
  },
});
