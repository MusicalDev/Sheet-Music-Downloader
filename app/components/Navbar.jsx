import React, { useState } from 'react';
import CodedText from './codedText';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='flex justify-center md:justify-between items-center bg-transparent h-20 w-full fixed top-0 z-50 px-5 lg:px-8 xl:p-[2%] py-4 backdrop-blur-md'>
        <a href="/">
          <h1 className='text-5xl md:text-7xl text-light w-auto cursor-pointer font-islandMoments m-4' alt='logo'>Opus2</h1>
        </a>

        <ul className='hidden md:flex gap-10 rounded-[24px] px-12 py-3 items-center bg-light/5 shadow-lg backdrop-blur-md'>
          <li className="font-outfit text-lg cursor-pointer">
            <a href="#top">
              <CodedText
                text="Home"
                className="text-light hover:text-lighthover"
              />
            </a>
          </li>
          <li className="font-outfit text-lg cursor-pointer">
            <a href="#howtouse">
              <CodedText
                text="Docs"
                className="text-light hover:text-lighthover"
              />
            </a>
          </li>
          <li className="font-outfit text-lg cursor-pointer">
            <a href="#contact">
              <CodedText
                text="Contact"
                className="text-light hover:text-lighthover"
              />
            </a>
          </li>
        </ul>

        <button onClick={toggleMenu}
          className="flex flex-col absolute right-8 justify-center items-center text-light md:hidden cursor-pointer focus:outline-none z-50">
          <span className={`bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
          <span className={`bg-light block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-light block transition-all duration-300 ease-out
            h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-light/20 backdrop-blur-sm flex justify-center items-center md:hidden"
          onClick={toggleMenu}
        >
          <div
            className="relative bg-dark/90 w-[70vw] max-w-sm rounded-3xl shadow-xl p-8 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >

            <ul className="flex flex-col items-center justify-center gap-6">
              <li className="font-outfit text-xl cursor-pointer">
                <a href="#top" onClick={toggleMenu}>
                  <CodedText
                    text="Home"
                    className="text-light hover:text-lighthover"
                  />
                </a>
              </li>
              <li className="font-outfit text-xl cursor-pointer">
                <a href="#howtouse" onClick={toggleMenu}>
                  <CodedText
                    text="Docs"
                    className="text-light hover:text-lighthover"
                  />
                </a>
              </li>
              <li className="font-outfit text-xl cursor-pointer">
                <a href="#contact" onClick={toggleMenu}>
                  <CodedText
                    text="Contact"
                    className="text-light hover:text-lighthover"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
