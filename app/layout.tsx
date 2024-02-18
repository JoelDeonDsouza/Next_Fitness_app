import type { Metadata } from "next";
import "./globals.css";
// Styled-components dependencies //
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Next Fit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
