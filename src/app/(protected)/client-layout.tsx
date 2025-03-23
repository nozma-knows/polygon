"use client";

import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { SessionProvider } from "next-auth/react";
import { Header } from "~/components/header";
import { type Session } from "next-auth";

export function ClientLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {

  return (
    <SessionProvider>
      <TRPCReactProvider>
        <div className="flex flex-col max-h-screen h-screen">
          <Header session={session} />
          {children}
        </div>
      </TRPCReactProvider>
    </SessionProvider>
  );
}