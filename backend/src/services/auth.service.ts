import { PrismaClient, Role } from "@prisma/client";
import { hashPassword, comparePasswords } from "../utils/password";
import { generateToken } from "../utils/jwt";

const prisma = new PrismaClient();

export const registerUser = async (
  fullName: string,
  email: string,
  password: string,
  role: Role,
  adminCode?: string
) => {
  if (role === "ADMIN" && adminCode !== process.env.ADMIN_REGISTRATION_CODE) {
    throw new Error("Invalid admin registration code");
  }

  return prisma.user.create({
    data: {
      fullName,
      email,
      password: await hashPassword(password),
      role,
    },
  });
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("Invalid credentials");

  const valid = await comparePasswords(password, user.password);

  if (!valid) throw new Error("Invalid credentials");

  return {
    token: generateToken({ id: user.id, role: user.role }),
    role: user.role,
  };
};
