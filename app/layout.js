import { Outfit, Ovo, Island_Moments } from "next/font/google";
import "./globals.css";
import BackgroundBubbles from './components/BackgroundBubbles';

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
  title: "Opus",
  description: "Sheet Music Downloader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${outfit.className} ${ovo.className} ${islandMoments.className} antialiased min-h-screen overflow-hidden bg-slate-800 flex items-center justify-center`}
      >
        <BackgroundBubbles />
        {children}
        
      </body>
    </html>
  );
}
