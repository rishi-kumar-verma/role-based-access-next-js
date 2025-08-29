"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Briefcase, Menu, LogIn, LogOut, User, LayoutDashboard, Search, ChevronDown, FilePlus2 } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// optional: simple skeletons
function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-muted ${className}`} />;
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const isAuthed = status === "authenticated";
  const isLoading = status === "loading";

  const userName = session?.user?.name ?? "";
  const userEmail = session?.user?.email ?? "";
  const userImage = session?.user?.image ?? "";
  const initials = (userName || userEmail || "U")
    .split(" ")
    .map((p) => p)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left: Brand + Desktop Nav */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            <span className="font-bold">HireHarborOnline</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/find-talent" className="text-sm font-medium transition-colors hover:text-primary">
              Find Talent
            </Link>
            <Link href="/find-work" className="text-sm font-medium transition-colors hover:text-primary">
              Find Work
            </Link>
            <Link href="/why-us" className="text-sm font-medium transition-colors hover:text-primary">
              Why Us
            </Link>
          </nav>
        </div>

        {/* Right: Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Optional quick search */}
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          {/* Loading state keeps width stable */}
          {isLoading && (
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-9 rounded-full" />
            </div>
          )}

          {!isLoading && !isAuthed && (
            <>
              <Link href="/login" className="text-sm font-medium">
                Log in
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}

          {!isLoading && isAuthed && (
            <>
              {/* Contextual primary action: adjust route/label to product needs */}
              <Link href="/dashboard">
                <Button variant="outline" className="hidden lg:inline-flex">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/post-job">
                <Button>
                  <FilePlus2 className="mr-2 h-4 w-4" />
                  Post a Job
                </Button>
              </Link>

              {/* User menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={userImage} alt={userName || "User"} />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={userImage} alt={userName || "User"} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{userName || "Account"}</p>
                        <p className="truncate text-xs text-muted-foreground">{userEmail}</p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard">
                    <DropdownMenuItem className="cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <button
                    className="w-full"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    aria-label="Sign out"
                  >
                    <DropdownMenuItem className="w-full cursor-pointer text-red-600 focus:text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>

        {/* Mobile: Sheet/Drawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" aria-haspopup="dialog">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85%] sm:w-96">
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  HireHarborOnline
                </SheetTitle>
              </SheetHeader>

              {/* Auth-aware top section */}
              {isLoading ? (
                <div className="mb-4 flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="mb-2 h-4 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ) : isAuthed ? (
                <div className="mb-4 flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={userImage} alt={userName || "User"} />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{userName || "Account"}</p>
                    <p className="truncate text-sm text-muted-foreground">{userEmail}</p>
                  </div>
                </div>
              ) : (
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Log in
                  </Button>
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}

              {/* Primary actions */}
              <div className="mb-3 grid gap-2">
                {isAuthed ? (
                  <>
                    <Link href="/dashboard">
                      <Button variant="secondary" className="w-full">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/post-job">
                      <Button className="w-full">
                        <FilePlus2 className="mr-2 h-4 w-4" />
                        Post a Job
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/find-talent">
                      <Button variant="secondary" className="w-full">
                        Find Talent
                      </Button>
                    </Link>
                    <Link href="/find-work">
                      <Button variant="secondary" className="w-full">
                        Find Work
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Navigation */}
              <div className="mt-2 grid gap-1">
                <Link href="/find-talent" className="block rounded px-2 py-2 text-sm hover:bg-muted">
                  Find Talent
                </Link>
                <Link href="/find-work" className="block rounded px-2 py-2 text-sm hover:bg-muted">
                  Find Work
                </Link>
                <Link href="/why-us" className="block rounded px-2 py-2 text-sm hover:bg-muted">
                  Why Us
                </Link>
                {isAuthed && (
                  <>
                    <Link href="/profile" className="block rounded px-2 py-2 text-sm hover:bg-muted">
                      Profile
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full rounded px-2 py-2 text-left text-sm text-red-600 hover:bg-muted focus:outline-none"
                    >
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
