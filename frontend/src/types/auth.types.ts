export type UserRole = "EMPLOYEE" | "ADMIN";

/* ---------- Requests ---------- */

export interface RegisterRequest {
  email: string;
  password: string;
  role: UserRole;
}

export interface LoginRequest {
  email: string;
  password: string;
}

/* ---------- Responses ---------- */

export interface RegisterResponse {
  message: string;
  userId: string;
}

export interface LoginResponse {
  message: string;
  userId: string;
  role: UserRole;
}
