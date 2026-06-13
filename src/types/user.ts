export type UserRole =
  | "Admin"
  | "Doctor"
  | "Patient";

export type UserStatus =
  | "Active"
  | "Inactive";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatar: string;
}