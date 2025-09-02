// app/layout.tsx
import React from "react";

export const metadata = {
  title: "Calorie Tracker",
  description: "Track your daily calories easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
