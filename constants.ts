import { Notice, UnitStats, Event } from './types';

export const APP_NAME = "CSI MKD YOUTH MOVEMENT";
export const APP_SUBTITLE = "CSI Madhya Kerala Diocese";

export const MOCK_NOTICES: Notice[] = [
  { id: 1, text: "Kalamela 2024 Registration closes on December 31st.", priority: "high" },
  { id: 2, text: "Unit Presidents meeting scheduled for next Saturday at Youth Centre.", priority: "normal" },
  { id: 3, text: "Please ensure all member details are updated before generating the report.", priority: "high" }
];

export const MOCK_STATS: UnitStats = {
  totalDistricts: 12,
  completedDistricts: 8,
  totalUnits: 145,
  completedUnits: 112,
  totalMembers: 4520,
  maleMembers: 2300,
  femaleMembers: 2220,
  topUnit: { name: "St. Paul's CSI, Kottayam", count: 120 }
};

export const MOCK_EVENTS: Event[] = [
  { id: 1, name: "Light Music (Male)", category: "Music", description: "Solo singing competition.", type: "individual" },
  { id: 2, name: "Light Music (Female)", category: "Music", description: "Solo singing competition.", type: "individual" },
  { id: 3, name: "Elocution (Malayalam)", category: "Literary", description: "5 minutes speech.", type: "individual" },
  { id: 4, name: "Group Song", category: "Music", description: "Max 7 members.", type: "group" },
  { id: 5, name: "Bible Quiz", category: "General", description: "Based on Romans.", type: "group" }
];

export const CONTACT_INFO = {
  address: ["Headquarters of CSI MKD Youth Movement", "CSI Youth Centre", "Changanassery P.O", "Kottayam, Kerala - 686101"],
  phones: ["+91 949 678 1916", "+91 790 767 4545"],
  emails: ["csimkdyouthmovement@gmail.com"],
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#"
  }
};