import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
const db = new PrismaClient();

function getUserAdmin() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      email: 'admin@admin.com',
      firstName: 'Admin',
      password: 'admin',
      role: Role.ADMIN,
    },
  ];
}

async function seed() {
  await Promise.all(
    getUserAdmin().map(async ({ password, ...userData }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return db.user.create({
        data: {
          ...userData,
          password: {
            create: {
              hashedPassword: hashedPassword,
            },
          },
        },
      });
    }),
  );
}

seed();
