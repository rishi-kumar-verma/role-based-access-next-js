"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { Button } from "./ui/button";
import { Briefcase, Menu } from "lucide-react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6" />
            <span className="inline-block font-bold">HireHarborOnline</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/find-talent"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Find Talent
            </Link>
            <Link
              href="/find-work"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Find Work
            </Link>
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Why Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium md:inline-block"
          >
            Log in
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            {status === "authenticated" ? (
              <UserMenu />
            ) : (
              <Button
                onClick={async () => {
                  await signIn("google");
                }}
              >
                Continue with Google
              </Button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
