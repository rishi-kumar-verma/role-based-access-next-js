import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "@/server/api/trpc";
import bcrypt from "bcrypt";



import { db } from "@/server/db";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        name: z.string().optional(),
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Implement your registration logic here
       const { name, email, password } = input;

      // Check if user already exists
      const existingUser = await db.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new Error("User with this email already exists.");
      }

       // Get the default role (e.g., "User")
      const defaultRole = await db.roles.findUnique({
        where: { name: "User" },
      });
      if (!defaultRole) {
        throw new Error('Default role "User" not found. Please seed your roles table.');
      }

      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const user = await db.user.create({
        data: {
          name,
          email,
          hashedPassword,
          isActive: true,
          roleId: defaultRole.id,
        },
      });
      
      return { success: true, user: { id: user.id, email: user.email } };
    }),
});