import { prisma } from "../src/prisma/client.js";
import { hashPassword } from "../src/utils/password.js";

async function main() {
  const email = "first.admin@company.com";
  const password = "Admin123!"; // You can change
  const role = "ADMIN";

  // Check if admin already exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log("First admin already exists");
    return;
  }

  // Hash password
  const hashed = await hashPassword(password);

  await prisma.user.create({
    data: {
      email,
      password: hashed,
      role,
      // remove isVerified for now
    },
  });

  console.log("First admin created successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
