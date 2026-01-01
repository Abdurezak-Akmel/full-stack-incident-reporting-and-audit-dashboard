import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { Role } from "@prisma/client";

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, role, adminCode } = req.body;

    await registerUser(fullName, email, password, role as Role, adminCode);

    res.status(201).json({ message: "Account created successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    res.json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
