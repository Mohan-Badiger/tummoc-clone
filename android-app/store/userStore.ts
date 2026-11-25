import { create } from 'zustand';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  isPhoneVerified: boolean;
  gender: 'male' | 'female' | 'other';
  dob: string;
  activeProfile: 'personal' | 'business';
  city: string;
  carbonSaved: string; // e.g. "0 g"
}

interface UserStoreState {
  profile: UserProfile;
  setProfile: (profile: Partial<UserProfile>) => void;
  setActiveProfile: (type: 'personal' | 'business') => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  profile: {
    firstName: 'Mohan',
    lastName: 'Badiger',
    email: 'mohanbadiger250@gmail.com',
    phone: '6362893798',
    countryCode: '91',
    isPhoneVerified: true,
    gender: 'male',
    dob: '17 Feb 2003',
    activeProfile: 'personal',
    city: 'Bengaluru',
    carbonSaved: '0 g',
  },
  setProfile: (updated) =>
    set((state) => ({
      profile: { ...state.profile, ...updated },
    })),
  setActiveProfile: (type) =>
    set((state) => ({
      profile: { ...state.profile, activeProfile: type },
    })),
}));
