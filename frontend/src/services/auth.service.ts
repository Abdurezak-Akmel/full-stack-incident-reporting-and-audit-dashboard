import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/auth.types";

const API_URL = "http://localhost:5000/api/auth";

/**
 * Common response handler
 */
const handleResponse = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
};

/**
 * Register user (Employee or Admin)
 * Backend sends OTP email after this
 */
export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};

/**
 * Login user
 * Backend sends OTP email after successful password check
 */
export const loginUser = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};

/**
 * Verify OTP (used for both register & login)
 */
export const verifyOtp = async (data: {
  email: string;
  otp: string;
}) => {
  const res = await fetch(`${API_URL}/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};
