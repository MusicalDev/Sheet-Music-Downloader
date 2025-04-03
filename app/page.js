'use client'

import Navbar from "./components/Navbar";
import SheetMusicDownloader from "./components/SheetMusicDownloader";


export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center  flex-col">
      
      <>

      <Navbar />
      <SheetMusicDownloader />

      </>
    </div>
  );
}
