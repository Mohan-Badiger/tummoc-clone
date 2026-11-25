import { NavigatorScreenParams } from '@react-navigation/native';

/**
 * Root Stack and Bottom Tab navigation type definitions.
 */
export type BottomTabParamList = {
  HomeTab: undefined;
  TummocMoneyTab: undefined;
  BookingsTab: undefined;
  PersonalTab: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  EditProfile: undefined;
  PassDetails: { passId: string };
  SelectProfileModal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
