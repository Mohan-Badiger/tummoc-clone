# Tummoc Android UI Clone — Screen Inventory & Investigation Matrix

This document tracks all candidate and observed screens for the pixel-perfect recreation of the Tummoc Android application.
The single source of truth for each screen is the authentic visual evidence (screenshots, recordings, and extracted APK resources).

---

## 1. Reference Device Profile
* **Target Device**: Redmi / Xiaomi Smartphone (e.g. Redmi Note series)
* **Native Resolution**: 1080 × 2400 pixels (FHD+, 20:9 aspect ratio)
* **Density Category**: xxhdpi (~440 dpi, scale factor ~2.75x–3x)
* **App Version Observed**: `v3.6.9`
* **Android Package Name**: `org.transhelp.bykerr`

---

## 2. Screen Investigation Matrix

| Screen Name | Category | Status | Reference Material Available | Key UI Components Identified |
|---|---|---|---|---|
| **Splash Screen** | Core Flow | **Observed (Verified)** | `Screenshot_...-13-11-00-864` | Dark teal `#0B2B34` background, circular white mascot badge, cyan/yellow Tummoc logo, "Made with love in India" footer |
| **Home Screen (Top)** | Core Flow | **Observed (Verified)** | `Screenshot_...-13-11-26-370` | Dark teal header, weather pill (`26.6 °C \| Bengaluru`), greeting, eco badge (`0 g`), search card with favorite heart, business profile banner, Passes & Tickets cards, Commute options tiles, Outstation banner, Bus stops near you floating button |
| **Home Screen (Scrolled)** | Core Flow | **Observed (Verified)** | `Screenshot_...-13-11-29-089` | Feature voting card ("Let us know the greatest feature..."), lime green "Vote now" button, ballot box illustration |
| **Navigation Drawer** | Navigation | **Observed (Verified)** | `Screenshot_...-13-11-34-935`, `...-13-11-37-092` | User avatar with gradient ring, user name, phone number, profile selector pill, 11 menu list items, version footer `v3.6.9`, 4 social links |
| **Tummoc Money** | Wallet / Pay | **Observed (Verified)** | `Screenshot_...-13-11-49-003` | Dark teal header, "Available Balance" card (`₹ 0.0`), cyan "Add Money" button, "Transaction History", "Terms and Conditions" |
| **Bookings (Passes Tab)** | Ticketing | **Observed (Verified)** | `Screenshot_...-13-12-03-685` | Top tab bar (Passes vs Trips/Tickets), filter pills (Active / Expired), Orange gradient pass card (`₹ 1500.0`), Teal gradient pass card, "Book a new pass" button |
| **Bookings (Trips Empty)**| Ticketing | **Observed (Verified)** | `Screenshot_...-13-12-13-387` | Mascot peeking out illustration, `“ Uh - oh “` title, `Couldn't find any trips history` subtitle |
| **Select Profile Modal** | Bottom Sheet | **Observed (Verified)** | `Screenshot_...-13-12-33-306` | Bottom sheet with close `X`, Personal Profile (selected state with cyan border), Business Profile (unselected with "Link Now" button) |
| **Edit Profile Screen** | Profile | **Observed (Verified)** | `Screenshot_...-13-12-50-736` | Avatar with edit badge, text inputs (First Name, Last Name, Email, Phone with country flag & verified badge), gender pills (Male, Female, Other), Date of Birth, Business checkbox, Submit button |
| **Onboarding** | Candidate | Awaiting Reference | Screen recording in `reference/recordings/` | Intro slides, value propositions, CTA buttons |
| **Login / Registration** | Candidate | Awaiting Reference | Screen recording in `reference/recordings/` | Phone number entry, OTP verification screen, terms agreement |
| **Search & Autocomplete**| Search | Candidate | Awaiting Reference | Search input active state, recent searches, saved places, suggestions |
| **Route Planning** | Routing | Candidate | Awaiting Reference | Origin/Destination selectors, multi-modal route cards, transit map overlay |
| **Bus (BMTC)** | Transit | Candidate | Awaiting Reference | Route numbers, live tracking, stops schedule, fare breakdown |
| **Metro (Namma Metro)** | Transit | Candidate | Awaiting Reference | Line selectors (Purple/Green), station list, token/QR booking |
| **Ticket Details (Active)**| Ticketing | Candidate | Awaiting Reference | Active QR code pass, countdown timer, inspector validation screen |
| **Payment Gateway** | Payments | Candidate | Awaiting Reference | Payment options (UPI, Cards, Netbanking, Tummoc Money) |
| **Settings / Language** | Settings | Candidate | Awaiting Reference | Language selection list (English, Kannada, Hindi, etc.), notification toggles |
| **Notifications** | Alerts | Candidate | Awaiting Reference | Notification feed, promotional banners |

---

## 3. Strict Implementation Protocol
1. **Never Invent Layouts**: A screen is only moved to "In Progress" when reference screenshots or recordings are directly inspected.
2. **Design Tokens First**: All layout dimensions, colors, typography, and corner radii must map to centralized tokens in `android-app/theme/`.
3. **REA Integration**: When the APK is inspected with REA, exact vector assets, drawables, fonts, and strings will supersede approximations.
