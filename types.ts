// User Roles
export enum UserRole {
  ADMIN = '1',
  REGISTERED_UNIT = '2',
  DISTRICT_OFFICIAL = '3',
  GUEST = '0'
}

export interface User {
  id: number;
  username: string;
  role: UserRole;
  unitName?: string;
  district?: string;
}

// Data Models
export interface Notice {
  id: number;
  text: string;
  priority: 'high' | 'normal';
}

export interface UnitStats {
  totalDistricts: number;
  completedDistricts: number;
  totalUnits: number;
  completedUnits: number;
  totalMembers: number;
  maleMembers: number;
  femaleMembers: number;
  topUnit: { name: string; count: number };
}

export interface Event {
  id: number;
  name: string;
  category: string;
  description: string;
  type: 'individual' | 'group';
}

export interface Member {
  id: number;
  name: string;
  gender: 'Male' | 'Female';
  phone: string;
  dob: string;
  unit: string;
}

export interface DashboardStat {
  label: string;
  value: string | number;
  color?: string;
  icon?: any;
}