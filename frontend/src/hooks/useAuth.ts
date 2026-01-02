import { useState } from "react";
import { loginUser, registerUser } from "../services/auth.service";
import type {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
  RegisterResponse,
  UserRole,
} from "../types/auth.types";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<{
    userId: string;
    role: UserRole;
  } | null>(null);

  const login = async (data: LoginRequest): Promise<LoginResponse | null> => {
    try {
      setLoading(true);
      setError(null);
      const res = await loginUser(data);
      setUser({ userId: res.userId, role: res.role });
      return res;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    data: RegisterRequest
  ): Promise<RegisterResponse | null> => {
    try {
      setLoading(true);
      setError(null);
      return await registerUser(data);
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
};
