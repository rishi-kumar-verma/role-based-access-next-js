import { PrismaClient, ACTIONS, SOURCES } from "@prisma/client";
import bcrypt from "bcrypt";

const saltRounds = 10;
const plaintextPassword = "password";
const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

const prisma = new PrismaClient();

async function main() {
  const permissionsData = [
    { name: "View Users", source: SOURCES.USER, actions: [ACTIONS.READ] },
    { name: "Manage Users", source: SOURCES.USER, actions: [ACTIONS.READ, ACTIONS.WRITE, ACTIONS.UPDATE, ACTIONS.DELETE] },
    { name: "View Roles", source: SOURCES.ROLES, actions: [ACTIONS.READ] },
    { name: "Manage Roles", source: SOURCES.ROLES, actions: [ACTIONS.READ, ACTIONS.WRITE, ACTIONS.UPDATE, ACTIONS.DELETE] },
    { name: "View Logs", source: SOURCES.LOGS, actions: [ACTIONS.READ] },
    { name: "Manage Permissions", source: SOURCES.PERMISSIONS, actions: [ACTIONS.READ, ACTIONS.WRITE, ACTIONS.UPDATE, ACTIONS.DELETE] },
  ];

  // Upsert permissions by unique 'name' (now valid with @unique)
  for (const perm of permissionsData) {
    await prisma.permission.upsert({
      where: { name: perm.name },
      update: {},
      create: perm,
    });
  }

  // Upsert roles by unique 'name'
  const adminRole = await prisma.roles.upsert({
    where: { name: "Admin" },
    update: {},
    create: {
      name: "Admin",
      description: "Administrator with full permissions",
    },
  });

  const userRole = await prisma.roles.upsert({
    where: { name: "User" },
    update: {},
    create: {
      name: "User",
      description: "Basic user with limited permissions",
    },
  });

  // Assign all permissions to Admin role using compound unique where clause
  for (const perm of permissionsData) {
    const permission = await prisma.permission.findUnique({ where: { name: perm.name } });

    if (permission) {
      await prisma.rolesPermissionJoin.upsert({
        where: {
          roleId_permissionId: {
            roleId: adminRole.id,
            permissionId: permission.id,
          },
        },
        create: {
          roleId: adminRole.id,
          permissionId: permission.id,
        },
        update: {},
      });
    }
  }

  // Assign 'View Users' permission to User role
  const viewUserPermission = await prisma.permission.findUnique({ where: { name: "View Users" } });

  if (viewUserPermission) {
    await prisma.rolesPermissionJoin.upsert({
      where: {
        roleId_permissionId: {
          roleId: userRole.id,
          permissionId: viewUserPermission.id,
        },
      },
      create: {
        roleId: userRole.id,
        permissionId: viewUserPermission.id,
      },
      update: {},
    });
  }

  // Create default admin user
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@example.com",
      isActive: true,
      roleId: adminRole.id,
      hashedPassword: hashedPassword,
      // Set other fields as needed, e.g., emailVerified: new Date(),
    },
  });

  // Create default standard user
  const defaultUser = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      name: "Default User",
      email: "user@example.com",
      isActive: true,
      roleId: userRole.id,
      hashedPassword: hashedPassword,
      // Set other fields as needed
    },
  });

  console.log("Default roles and permissions seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
