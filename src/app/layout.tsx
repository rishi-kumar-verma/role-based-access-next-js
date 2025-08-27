// import "@/styles/globals.css";
import "@/app/globals.css"
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Open_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/server/auth";
import Link from "next/link"
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "AccessNexus",
  description: "Where Security Meets Simplicity",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html>
      <body className={openSans.className}>
        <TRPCReactProvider>
          <SessionProvider session={session}>
            <div className="flex min-h-screen flex-col">
              <Navbar />{" "}
              {children}
              <footer className="w-full border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2025 HireHarborOnline. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Terms
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Privacy
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </SessionProvider>
        </TRPCReactProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
