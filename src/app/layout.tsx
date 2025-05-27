import type { Metadata } from "next";
import "./globals.css";
import SidePanel from "./ui/side-panel/SidePanel";
import { poppins } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Movie List App",
    default: "Movie List App",
  },
  description: "An App to Search For Your Favorite Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased flex flex-col md:flex-row`}>
        <SidePanel />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
