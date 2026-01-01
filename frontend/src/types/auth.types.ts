// src/types/auth.types.ts
export type UserRole = "EMPLOYEE" | "ADMIN";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
