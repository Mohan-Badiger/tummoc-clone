import React from 'react';
import Svg, { Path, Rect, Circle, G, Line } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

/**
 * 1. BMTC Pass ID Card Icon (Passes & Tickets row)
 */
export const BmtcPassIcon: React.FC<IconProps> = ({ size = 26, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 28 24" fill="none">
    {/* Card base */}
    <Rect x="1" y="2" width="26" height="20" rx="3" stroke={color} strokeWidth="1.8" />
    {/* Person Head & Shoulders */}
    <Circle cx="8" cy="9" r="3" fill={color} />
    <Path d="M4 17c0-2.2 1.8-4 4-4s4 1.8 4 4" fill={color} />
    {/* Horizontal info bars */}
    <Rect x="15" y="7" width="9" height="2" rx="1" fill={color} />
    <Rect x="15" y="11" width="7" height="2" rx="1" fill={color} />
    <Rect x="15" y="15" width="5" height="2" rx="1" fill={color} />
  </Svg>
);

/**
 * 2. Metro Ticket Icon (Front-facing train with windshield and lights)
 */
export const MetroTicketIcon: React.FC<IconProps> = ({ size = 26, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Train body */}
    <Rect x="5" y="3" width="14" height="15" rx="3.5" stroke={color} strokeWidth="1.8" />
    {/* Windshield */}
    <Rect x="7" y="6" width="10" height="5" rx="1.5" fill={color} />
    {/* Headlights */}
    <Circle cx="8" cy="14.5" r="1.3" fill={color} />
    <Circle cx="16" cy="14.5" r="1.3" fill={color} />
    {/* Under-carriage / tracks */}
    <Path d="M7 18l-2 3M17 18l2 3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

/**
 * 3. All-In-One Ticket Icon (QR grid + ALL-IN-ONE pill)
 */
export const AllInOneTicketIcon: React.FC<IconProps> = ({ size = 26, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 28 26" fill="none">
    {/* QR Corner Markers */}
    <Rect x="6" y="2" width="4" height="4" fill={color} />
    <Rect x="18" y="2" width="4" height="4" fill={color} />
    <Rect x="6" y="10" width="4" height="4" fill={color} />
    <Rect x="18" y="10" width="4" height="4" fill={color} />
    <Rect x="12" y="6" width="4" height="4" fill={color} />
    {/* Dark Pill Bar */}
    <Rect x="1" y="17" width="26" height="8" rx="2" fill={color} />
  </Svg>
);

/**
 * 4. Commute Bus Icon (Front-facing city bus)
 */
export const CommuteBusIcon: React.FC<IconProps> = ({ size = 30, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect x="4" y="3" width="16" height="16" rx="3" stroke={color} strokeWidth="2" />
    {/* Large Windshield */}
    <Rect x="6.5" y="5.5" width="11" height="6" rx="1" fill={color} />
    {/* Round Headlights */}
    <Circle cx="7.5" cy="15" r="1.3" fill={color} />
    <Circle cx="16.5" cy="15" r="1.3" fill={color} />
    {/* Grill */}
    <Line x1="10.5" y1="15" x2="13.5" y2="15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Wheels */}
    <Path d="M6 19v2M18 19v2" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
  </Svg>
);

/**
 * 5. Commute Metro Train Icon
 */
export const CommuteMetroIcon: React.FC<IconProps> = ({ size = 30, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 4.5C5 3.12 6.12 2 7.5 2h9C17.88 2 19 3.12 19 4.5v12a3.5 3.5 0 01-3.5 3.5h-7A3.5 3.5 0 015 16.5v-12z"
      stroke={color}
      strokeWidth="2"
    />
    <Rect x="7" y="5.5" width="10" height="6.5" rx="1.5" fill={color} />
    <Circle cx="8.5" cy="15" r="1.3" fill={color} />
    <Circle cx="15.5" cy="15" r="1.3" fill={color} />
    <Path d="M8 20l-2 2.5M16 20l2 2.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

/**
 * 6. Direct Ride: SCOOTER / MOTORCYCLE (Two-Wheeler Bike Taxi)
 * As observed in the user's uploaded reference screenshot!
 */
export const DirectRideScooterIcon: React.FC<IconProps> = ({ size = 30, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Handlebars */}
    <Path d="M6 5h12M12 5v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Mirrors */}
    <Circle cx="5" cy="3" r="1.2" fill={color} />
    <Circle cx="19" cy="3" r="1.2" fill={color} />
    {/* Headlight & Shield */}
    <Rect x="9" y="8" width="6" height="5" rx="2" fill={color} />
    {/* Body Frame */}
    <Path d="M12 13v4M8 17h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Front Wheel */}
    <Circle cx="12" cy="19.5" r="2.5" stroke={color} strokeWidth="2" />
  </Svg>
);

/**
 * 7. Airport Rail Locomotive Icon
 */
export const AirportRailIcon: React.FC<IconProps> = ({ size = 30, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 3.5C6 2.67 6.67 2 7.5 2h9c.83 0 1.5.67 1.5 1.5v12c0 1.93-1.57 3.5-3.5 3.5h-5C7.57 19 6 17.43 6 15.5v-12z"
      stroke={color}
      strokeWidth="2"
    />
    <Path d="M8 5h8v4.5H8V5z" fill={color} />
    <Circle cx="9" cy="13.5" r="1.2" fill={color} />
    <Circle cx="15" cy="13.5" r="1.2" fill={color} />
    <Path d="M8 19l-2 3M16 19l2 3" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

/**
 * 8. Bottom Navbar: Tummoc Home Icon (Solid navy house)
 */
export const TummocHomeNavIcon: React.FC<IconProps> = ({ size = 24, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 10.25L12 3l9 7.25V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.75z"
      fill={color}
    />
  </Svg>
);

/**
 * 9. Bottom Navbar: Tummoc Money Wallet Icon (Outlined wallet with credit card & snap)
 */
export const TummocMoneyNavIcon: React.FC<IconProps> = ({ size = 24, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Wallet outline */}
    <Rect x="3" y="6" width="18" height="14" rx="2.5" stroke={color} strokeWidth="2" />
    {/* Inner card card ridge */}
    <Path d="M3 10h18" stroke={color} strokeWidth="1.5" />
    {/* Flap snap button */}
    <Circle cx="16" cy="14" r="1.5" fill={color} />
  </Svg>
);

/**
 * 10. Bottom Navbar: Bookings Pass Icon (Tilted ticket with notches)
 */
export const TummocBookingsNavIcon: React.FC<IconProps> = ({ size = 24, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G transform="rotate(-15 12 12)">
      <Path
        d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 000 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 000-4v-2a2 2 0 000-4V6z"
        stroke={color}
        strokeWidth="2"
      />
      <Path d="M10 6v12" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
    </G>
  </Svg>
);

/**
 * 11. Bottom Navbar: Personal Profile Icon (Solid user silhouette)
 */
export const TummocPersonalNavIcon: React.FC<IconProps> = ({ size = 24, color = '#0F2F38' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="7" r="4" fill={color} />
    <Path d="M4 19c0-3.5 3.58-6 8-6s8 2.5 8 6v1H4v-1z" fill={color} />
  </Svg>
);

/**
 * 12. Metro Station Near You Pin Icon (Red location pin with metro train silhouette inside)
 */
export const MetroStationPinIcon: React.FC<IconProps> = ({ size = 32 }) => (
  <Svg width={size} height={size} viewBox="0 0 28 32" fill="none">
    {/* Red teardrop location pin */}
    <Path
      d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 18 14 18s14-7.5 14-18c0-7.73-6.27-14-14-14z"
      fill="#EF4444"
    />
    {/* Inner white circle */}
    <Circle cx="14" cy="13" r="8.5" fill="#FFFFFF" />
    {/* Inner red metro train */}
    <Rect x="10.5" y="8" width="7" height="8" rx="1.5" fill="#EF4444" />
    <Rect x="11.5" y="9.5" width="5" height="3" rx="0.5" fill="#FFFFFF" />
    <Circle cx="12" cy="14" r="0.7" fill="#FFFFFF" />
    <Circle cx="16" cy="14" r="0.7" fill="#FFFFFF" />
  </Svg>
);
