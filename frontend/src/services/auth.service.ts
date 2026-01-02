import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/auth.types";

const API_URL = "http://localhost:5000/api/auth";

const handleResponse = async (res: Response) => {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }
  return data;
};

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


// const API_URL = "http://localhost:5000/api/auth"; // backend URL

// export const registerUser = async (data: {
//   email: string;
//   password: string;
//   role: "EMPLOYEE" | "ADMIN";
// }) => {
//   const res = await fetch(`${API_URL}/register`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// export const loginUser = async (data: {
//   email: string;
//   password: string;
// }) => {
//   const res = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };
