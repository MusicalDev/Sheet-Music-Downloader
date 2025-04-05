'use client'

import Contact from "./components/Contact";
import HowToUse from "./components/HowToUse";
import Navbar from "./components/Navbar";
import SheetMusicDownloader from "./components/SheetMusicDownloader";

export default function Home() {
  return (
    <div className=" flex h-full items-center justify-center  flex-col">

      <>
        <Navbar />
        <SheetMusicDownloader />
        <HowToUse />
        <Contact />
      </>
    </div>
  );
}
