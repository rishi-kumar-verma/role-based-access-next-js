"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // If using your enhanced primitives, you can also import useSidebar to close mobile on nav.
  // useSidebar,
} from "@/components/ui/sidebar";

import { Skeleton } from "./ui/skeleton";
import { NavUser } from "./ui/nav-user";
import {
  Users,
  ShieldCheck,
  KeySquare,
  FileText,
  Activity,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Permission utility
function hasAccess(
  required: [string, string] | undefined,
  perms?: { source: any; action: any }[],
) {
  if (!required) return true;
  if (!perms) return false;
  const [needSource, needAction] = required;
  return perms.some(
    (p) =>
      p?.source === needSource &&
      Array.isArray(p?.action) &&
      p.action.includes(needAction),
  );
}

type NavItem = {
  title: string;
  url: string;
  access?: [string, string];
};

type NavGroup = {
  title: string;
  icon?: React.ReactNode;
  access?: [string, string];
  items: NavItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
};

const NAV: NavGroup[] = [
  {
    title: "User",
    icon: <Users className="h-4 w-4" />,
    access: ["USER", "READ"],
    collapsible: true,
    defaultOpen: true,
    items: [{ title: "Manage", url: "/dashboard", access: ["USER", "READ"] }],
  },
  {
    title: "Roles",
    icon: <ShieldCheck className="h-4 w-4" />,
    access: ["ROLES", "READ"],
    collapsible: true,
    items: [
      { title: "Manage", url: "/dashboard/roles", access: ["ROLES", "READ"] },
      {
        title: "Create new",
        url: "/dashboard/roles/new",
        access: ["ROLES", "WRITE"],
      },
    ],
  },
  {
    title: "Permissions",
    icon: <KeySquare className="h-4 w-4" />,
    access: ["PERMISSIONS", "READ"],
    collapsible: true,
    items: [
      {
        title: "Manage",
        url: "/dashboard/permission",
        access: ["PERMISSIONS", "READ"],
      },
      {
        title: "Create new",
        url: "/dashboard/permission/new",
        access: ["PERMISSIONS", "WRITE"],
      },
    ],
  },
  {
    title: "Logs",
    icon: <Activity className="h-4 w-4" />,
    access: ["LOGS", "READ"],
    collapsible: false,
    items: [
      { title: "Manage", url: "/dashboard/logs", access: ["LOGS", "READ"] },
    ],
  },
];

export function AppSidebar(props: {
  permissions?: { source: any; action: any }[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { update, status } = useSession();

  React.useEffect(() => {
    let mounted = true;
    update()
      .then(async (d) => {
        if (!mounted) return;
        if (d?.user?.isActive === false) {
          const resp = await signOut({ redirect: false, callbackUrl: "/" });
          router.push(resp?.url || "/");
          toast("You account has been deactivated.");
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []); // uses NextAuth client guidance for redirect: false + push [6]

  const isLoading = status === "loading";

  // Group open state
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      NAV.forEach((g) => {
        initial[g.title] = g.defaultOpen ?? true;
      });
      return initial;
    },
  );

  const toggleGroup = (title: string) =>
    setOpenGroups((s) => ({ ...s, [title]: !s[title] }));

  // Filter by permission
  const groups = React.useMemo(() => {
    return NAV.filter((g) => hasAccess(g.access, props.permissions))
      .map((g) => {
        const items = g.items.filter((it) =>
          hasAccess(it.access, props.permissions),
        );
        return { ...g, items };
      })
      .filter((g) => g.items.length > 0);
  }, [props.permissions]);

  // Optional: If your Sidebar wraps a mobile Sheet, you can auto-close on route change
  // If your sidebar is in a layout that persists across routes, listen for changes:
  // React.useEffect(() => {
  //   // If using your SidebarProvider with useSidebar(), you can close mobile on path change:
  //   // const { setOpenMobile } = useSidebar();
  //   // setOpenMobile(false);
  // }, [pathname]); // close Drawer on navigation (mobile best practice) [4][10]

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="flex flex-row items-center gap-3 p-3">
        <Image
          src={"/logo.png"}
          alt="AccessNexus"
          width={32}
          height={32}
          quality={100}
          className="h-8 w-8"
        />
        <p className="text-2xl font-bold">AccessNexus</p>
      </SidebarHeader>

      <SidebarContent>
        {isLoading && (
          <div className="space-y-3 p-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        )}

        {!isLoading &&
          groups.map((group) => {
            const isOpen = group.collapsible ? openGroups[group.title] : true;
            return (
              <SidebarGroup key={group.title}>
                <button
                  type="button"
                  onClick={() => group.collapsible && toggleGroup(group.title)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-expanded={group.collapsible ? isOpen : true}
                >
                  <SidebarGroupLabel className="flex items-center gap-2">
                    {group.icon}
                    {group.title}
                  </SidebarGroupLabel>
                  {group.collapsible &&
                    (isOpen ? (
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    ))}
                </button>

                {isOpen && (
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((it) => {
                        const active = pathname === it.url;
                        return (
                          <SidebarMenuItem key={it.title}>
                            <SidebarMenuButton
                              asChild
                              isActive={active}
                              className={cn(
                                "data-[active=true]:bg-muted data-[active=true]:text-foreground",
                                "h-8 text-sm", // compact density so child looks subordinate
                              )}
                            >
                              <Link
                                href={it.url}
                                aria-current={active ? "page" : undefined}
                                className={cn(
                                  "flex w-full items-center justify-between rounded-md",
                                  // Indent and add a vertical guide to imply hierarchy
                                  "ml-2 border-l border-sidebar-border pl-3",
                                  // Slightly distinct hover for nested level
                                  "hover:bg-muted/60",
                                )}
                              >
                                <span className="truncate text-foreground/90">
                                  {it.title}
                                </span>
                                <ChevronRight className="ml-2 h-3.5 w-3.5 opacity-60" />
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </SidebarGroup>
            );
          })}

        {/* Optional: Resources block */}
        {!isLoading && (
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Resources
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/docs/getting-started">Docs</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
