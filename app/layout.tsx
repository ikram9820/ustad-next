import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBtm from "./NavBtm";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="violet">
              <main className="mb-12 p-4">
                <Container>{children}</Container>
              </main>
              <NavBtm />
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
