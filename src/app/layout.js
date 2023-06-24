import PagePadding from "../../components/server/layout/PagePadding";
import Navbar from "../../components/server/navigation-bar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taha Sokmen - Personal Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <PagePadding>{children}</PagePadding>
      </body>
    </html>
  );
}
