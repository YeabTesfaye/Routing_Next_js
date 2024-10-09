import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata:Metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

interface Props{
    children : ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
