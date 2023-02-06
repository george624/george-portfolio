"use client";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div
          className="flex flex-col items-center justify-center w-full min-h-screen m-auto overflow-hidden text-white md:overflow-visible"
          style={{ maxWidth: "1200px" }}
        >
          <main className="flex-1 w-full p-5 text-center">
            <div className="hidden sm:block z-100">
              <Navbar />
            </div>
            <div className="block -m-5 sm:hidden z-100">
              <MobileNav />
            </div>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
