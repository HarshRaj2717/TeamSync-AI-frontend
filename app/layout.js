import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeamSync.AI",
  description: "TeamSync.AI is a platform for creating AI team workflow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
