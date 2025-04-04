import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="flex bg-dark text-gray-300 font-outfit w-full h-auto">
            <div className="flex w-full h-auto justify-around flex-col items-center p-4 gap-4">
                <div className='flex gap-4'>
                    <div className="flex  items-center">
                        <Link href="/" className="hover:text-white transition duration-300">
                            Home
                        </Link>
                    </div>

                    <div className="flex  items-center">
                        <Link href="#howtouse" className="hover:text-white transition duration-300">
                            Docs
                        </Link>
                    </div>
                </div>

                <div className=" flex  items-center">
                    <p>&copy; {new Date().getFullYear()} Built by 🎵MusicalDev🎵</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;