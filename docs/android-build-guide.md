# Tummoc Android Clone — Physical Device Testing & Build Guide

## 1. Target Hardware & Reference Specifications
* **Device**: Redmi / Xiaomi Smartphone (e.g. Redmi Note series)
* **Screen Resolution**: 1080 × 2400 px (FHD+, 20:9 Aspect Ratio)
* **Screen Density**: `xxhdpi` (~440 dpi)
* **Package Name**: `org.transhelp.bykerr.clone`

---

## 2. Environment Status
* **Node.js**: v26.13.1
* **npm**: v11.14.1
* **ADB**: Installed at `C:\Dev\platform-tools\adb.exe` (v36.0.0)
* **Android SDK**: `C:\Dev` (Platforms: `android-35`, Build Tools: `34.0.0`, `33.0.2`)
* **TypeScript & Metro Bundler**: Verified (Zero compile errors, bundled 3,108 modules)

---

## 3. Redmi / Xiaomi Device Configuration
To test the clone with native fidelity on your physical Redmi device:

1. **Enable Developer Options**:
   * Open **Settings** > **About Phone**.
   * Tap **MIUI version** or **OS version** 7 times until you see *"You are now a developer!"*.
2. **Enable Required USB Settings**:
   * Open **Settings** > **Additional settings** > **Developer options**.
   * Turn **ON** `USB debugging`.
   * Turn **ON** `Install via USB` (requires Xiaomi account sign-in).
   * Turn **ON** `USB debugging (Security settings)` (allows input and window simulation).
   * *(Optional)* Set **Default USB configuration** to `File Transfer (MTP)`.

---

## 4. Launching the App on Your Device

### Option A: Immediate Live Preview via Expo
1. In your terminal, navigate to the application directory:
   ```powershell
   cd C:\Users\mohan\Documents\Projects\tummoc-clone\android-app
   npm start
   ```
2. Scan the displayed terminal QR code using **Expo Go** from the Google Play Store on your Redmi phone.
3. For reliable live reloading over USB, forward the Metro port:
   ```powershell
   C:\Dev\platform-tools\adb.exe reverse tcp:8081 tcp:8081
   ```

### Option B: Local Android Development Build (expo-dev-client)
Because `expo-dev-client` is installed:
1. Ensure your Redmi device is connected via USB:
   ```powershell
   C:\Dev\platform-tools\adb.exe devices
   ```
2. Run prebuild to generate the native Android Gradle project:
   ```powershell
   cd C:\Users\mohan\Documents\Projects\tummoc-clone\android-app
   npx expo prebuild --platform android
   ```
3. Run the development build on your connected device:
   ```powershell
   npm run android
   ```

---

## 5. REA Reverse-Engineering Workflow
When original APK or assets become available:
1. Place APK in `reference/assets/` or provide its path.
2. Use REA tools (`inspect_android_package`, `decode_android_resources`, `extract_artifact`) to extract vector drawables, original fonts, exact color values, and string tables directly into the React Native project.
