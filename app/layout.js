import { Outfit, Ovo, Island_Moments } from "next/font/google";
import "./globals.css";
import BackgroundBubbles from './components/BackgroundBubbles';
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-Outfit',
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-Ovo',
});

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-Island-Moments',
});

export const metadata = {
  title: "Opus2",
  description: "Sheet Music Downloader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${outfit.className} ${ovo.className} ${islandMoments.className} antialiased min-h-screen  bg-slate-800 flex flex-col items-center justify-center`}
      >
        <BackgroundBubbles />
        {children}
        <Footer />

      </body>
    </html>
  );
}
