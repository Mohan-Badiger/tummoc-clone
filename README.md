<div align="center">

  <img src="android-app/assets/icon.png" width="120" height="120" alt="Tummoc Logo" style="border-radius: 28px;" />

  # Tummoc — Smart Urban Transit & Commute App

  **A pixel-perfect, standalone Android recreation of the official Tummoc mobile transit application built with React Native, TypeScript, and Expo.**

  <p align="center">
    <a href="https://github.com/Mohan-Badiger/tummoc-clone/releases/download/v3.6.9/Tummoc-v3.6.9.apk">
      <img src="https://img.shields.io/badge/⚡_Download-Tummoc_v3.6.9_APK-0E2D39?style=for-the-badge&logo=android&logoColor=white" alt="Download APK" />
    </a>
    <a href="https://github.com/Mohan-Badiger/tummoc-clone/releases/latest">
      <img src="https://img.shields.io/github/v/release/Mohan-Badiger/tummoc-clone?style=for-the-badge&color=00A896" alt="Latest Release" />
    </a>
    <a href="https://github.com/Mohan-Badiger/tummoc-clone/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/Mohan-Badiger/tummoc-clone/build-apk.yml?branch=main&style=for-the-badge&logo=github&color=028090" alt="Build Status" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_Native-0.88-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React Native" />
    <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Expo-SDK_58-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo" />
    <img src="https://img.shields.io/badge/Hermes-Bytecode_Enabled-9B59B6?style=flat-square" alt="Hermes" />
    <img src="https://img.shields.io/badge/State-Zustand-443E38?style=flat-square" alt="Zustand" />
    <img src="https://img.shields.io/badge/Platform-Android_Standalone-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Android" />
  </p>

</div>

---

## 📲 Direct APK Download (No Expo Go Required!)

The application is distributed as a **100% standalone Android release package** (`.apk`) with all Hermes bytecode bundles, vector assets, and native fonts embedded offline. It installs directly on any Android device without requiring Expo Go or development servers.

| Package | Version | Architecture | Direct Download |
| :--- | :--- | :--- | :--- |
| **Tummoc Standalone App** | `v3.6.9` | `arm64-v8a` / `armeabi-v7a` | [📥 **Download Tummoc-v3.6.9.apk**](https://github.com/Mohan-Badiger/tummoc-clone/releases/download/v3.6.9/Tummoc-v3.6.9.apk) *(46.5 MB)* |

> **Installation Quick Guide**:
> 1. Download [`Tummoc-v3.6.9.apk`](https://github.com/Mohan-Badiger/tummoc-clone/releases/download/v3.6.9/Tummoc-v3.6.9.apk) on your Android device.
> 2. Open the file and tap **Install** (if prompted, toggle *Allow installation from this source*).
> 3. Launch **Tummoc** directly from your app drawer!

---

## 🌟 Key Application Features

### 1. 🏠 Dynamic Home Screen
- **Authentic Top Header**: Weather badge (`26.7 °C`), live city selector (`Bengaluru`), personalized greeting, slide-out hamburger menu trigger, and animated eco-impact carbon saved pill (`0 g`).
- **Floating Trip Search Bar**: Crisp search bar with quick access to favorite destinations.
- **Business Profile Banner**: Interactive mascot avatar with seamless one-tap profile linking.
- **Passes & Tickets Carousel**:
  - **BMTC Pass**: Digital pass shortcut with person avatar icon.
  - **Metro Ticket**: Rail transit ticket shortcut.
  - **All-in-One Ticket**: Clean vector card featuring custom dotted QR code and dark typography.
- **Commute Options Available**: Bus, Metro, Airport Rail, and Direct Ride (with authentic scooter icon and orange **"Cash"** pill badge).
- **Travel Outstation Card**: Integrated intercity bus booking banner.
- **Bus Stops Near You**: Floating card with circular geolocation pin and route direction trigger.
- **Community Feature Voting**: Interactive voting card for user-requested transit integrations.

### 2. 🎫 BMTC Digital Pass & Dynamic Ticket Screen
- **Facial Landmark ID Pass Photo**: User identification portrait centered on facial landmark coordinates (`364×180`) inside a circular gold/teal border.
- **Pass Badges & Hierarchy**: High-contrast `Ordinary Service Monthly Pass` title with authentic `Monthly` and `Ordinary` teal category badges.
- **Dynamic 800ms Auto-Refreshing QR Code**: 
  - Periodic seed rotation replicating official BMTC anti-fraud security patterns.
  - Center circular mask embedding the official **BMTC Gandaberunda seal**.
  - Optimized composite SVG rendering engine ensuring zero frame drops.
- **Booking Details Breakdown**: Transparent display of pass validity dates, ID reference (`TPASS165985424`), user details, and fare breakdown.
- **Divided Action Modules**: Double-bordered dashed separators wrapping the **Generate Mail Receipt** button.
- **Official Terms & Conditions**: Collapsible accordion detailing all official BMTC pass regulations and compliance notices.

### 3. 💳 Tummoc Money Screen
- **Available Balance Card**: Seamless teal-gradient header with instant balance display (`₹ 0.0`).
- **Action Triggers**: Quick **Add Money** CTA with modal top-up workflows.
- **Account Actions**: Interactive navigation links for **Transaction History** and **Terms and Conditions**.
- **Persistent Bottom Navigation**: Seamlessly integrates into the root bottom tab bar without header overlap.

### 4. 🧭 Navigation & Profile Architecture
- **Persistent Custom Bottom Tab Bar**:
  - Custom SVG icons for **Home**, **Tummoc Money**, **Bookings**, and **Personal**.
  - Centered orange **"New"** badge floating above the Personal tab icon.
- **Slide-out Drawer Menu**: Side menu with edit profile, wallet, and support shortcuts.
- **Profile Switching Bottom Sheet**: Modal sheet to toggle between Personal and Business profiles.

---

## ⚡ Performance & Engineering Highlights

- **99% Fewer Native Bridge Calls**: The dynamic QR code compiles 200+ active matrix cells into a **single composite SVG `<Path d={...} />`** element, eliminating virtual DOM node churn during 800ms refresh cycles.
- **Component Memoization**: Key modules (`PassesAndTickets`, `CommuteOptions`, `DynamicQRCode`) are stabilized via `React.memo` and `useCallback` to prevent redundant re-renders during state transitions.
- **Pre-compiled Hermes Bytecode**: JavaScript bundles are pre-compiled into optimized `.hbc` Hermes bytecode, slashing Android cold-start times.
- **Verified Clean Assets**: All icons, wordmarks, and logos are 100% authentic 32-bit RGBA PNGs compliant with Android AAPT2 asset crunching.

---

## 📁 Project Structure

```text
tummoc-clone/
├── .github/
│   └── workflows/
│       └── build-apk.yml          # Automated standalone APK CI/CD pipeline
├── android-app/
│   ├── android/                   # Prebuilt native Android project (Gradle/Kotlin)
│   │   ├── app/                   # App build script, debug.keystore, and AndroidManifest
│   │   └── gradle.properties      # Tuned memory (4GB) and target architectures
│   ├── assets/                    # Authentic application assets & icons
│   │   ├── icons/                 # Commute PNG icons (bus, metro, scooter, rail)
│   │   ├── bmtc_logo.png          # Official BMTC Gandaberunda seal
│   │   ├── passenger_photo.png    # Centered portrait ID photo
│   │   ├── tummoc_logo.png        # Transparent Tummoc wordmark
│   │   └── tummoc_mascot.png      # Tummoc aviator bird mascot
│   ├── components/                # Modular UI components
│   │   ├── common/                # Drawer, profile sheet, custom SVG icons
│   │   ├── home/                  # HomeHeader, CommuteOptions, PassesAndTickets
│   │   └── ticket/                # DynamicQRCode & pass summary components
│   ├── screens/                   # Top-level screen views
│   │   ├── HomeScreen.tsx
│   │   ├── PassDetailsScreen.tsx
│   │   └── TummocMoneyScreen.tsx
│   ├── store/                     # Zustand state management (user profile & wallet)
│   ├── theme/                     # Authentic color palette & typography tokens
│   ├── app.json                   # Expo production configuration & Android permissions
│   └── eas.json                   # EAS Build profile settings
├── README.md                      # Project documentation
└── Tummoc-v3.6.9.apk              # Standalone release APK binary
```

---

## 🛠️ Local Development & Build Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v20 or v22 LTS)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on your mobile device (for live development preview)

### 1. Clone & Install
```bash
git clone https://github.com/Mohan-Badiger/tummoc-clone.git
cd tummoc-clone/android-app
npm install
```

### 2. Run in Development Mode
```bash
# Start Metro bundler for Expo Go
npm start
```
Scan the displayed QR code with the Expo Go app (Android) or Camera app (iOS) to load the live development build with Fast Refresh.

### 3. Type Checking & Bundle Export
```bash
# Validate TypeScript with zero errors
npm run typecheck

# Test local production bundle export
npx expo export
```

### 4. Build Standalone APK Locally
If you have Android Studio & Java 17 configured on your machine:
```bash
cd android
./gradlew assembleRelease
```
The output APK will be generated at:
`android/app/build/outputs/apk/release/app-release.apk`

---

## 🤖 Automated CI/CD Pipeline

Every push to the `main` branch automatically triggers our GitHub Actions pipeline:
1. Provisions an Ubuntu runner with **Java 17** and **Node.js 22**.
2. Restores and links all React Native dependencies.
3. Builds the standalone release APK via `./gradlew assembleRelease`.
4. Uploads the `.apk` as a downloadable artifact and publishes it to [GitHub Releases](https://github.com/Mohan-Badiger/tummoc-clone/releases).

---

## 📄 License & Attribution

This project is built for educational, portfolio, and reverse-engineering research purposes. All original trademarks, brand names, and visual designs belong to **Tummoc (Transhelp Technologies Pvt. Ltd.)** and **Bangalore Metropolitan Transport Corporation (BMTC)**.
