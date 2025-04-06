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

                <div className="flex  items-center space-x-2">
  <p className="flex items-center">
  <svg
    width="20"
    height="23"
    viewBox="0 0 120 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="63" r="60" fill="#2DD4BF" />
    <path
      d="M104.052 31.075L68.5042 16.7146C67.7979 16.2438 67.0917 15.7729 66.15 15.7729C64.2667 15.7729 62.6188 17.4209 62.6188 19.3042L62.1479 79.1C58.3813 76.275 58.6167 76.275 52.9667 76.275C40.9604 76.275 31.0729 83.8084 31.0729 92.9896C31.0729 102.171 40.725 109.704 52.9667 109.704C63.7958 109.704 72.7417 103.819 74.3896 95.8146C74.625 95.3438 74.625 44.2584 74.625 44.2584L108.996 57.2063C110.644 57.6771 112.292 56.7355 112.292 55.0875V43.3167C112.292 37.9021 108.996 32.9584 104.052 31.075Z"
      fill="white"
    />
    <path
      d="M61.6771 84.7501C61.6771 93.2251 52.7312 100.052 41.6667 100.052C30.6021 100.052 21.6562 93.2251 21.6562 84.7501C21.6562 76.2751 30.6021 69.448 41.6667 69.448C43.0792 69.448 44.7271 69.6834 46.1396 69.9188"
      stroke="#18193F"
      strokeWidth="6.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M61.6771 84.7501V12.948L91.8104 24.248C96.5187 25.8959 99.3438 30.3688 99.3438 35.3126V50.6147L76.9792 42.1397"
      stroke="#18193F"
      strokeWidth="6.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  &nbsp; 
    &copy; {new Date().getFullYear()}&nbsp; 
    Built by MusicalDev
  </p>
  <svg
    width="20"
    height="23"
    viewBox="0 0 120 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="63" r="60" fill="#2DD4BF" />
    <path
      d="M104.052 31.075L68.5042 16.7146C67.7979 16.2438 67.0917 15.7729 66.15 15.7729C64.2667 15.7729 62.6188 17.4209 62.6188 19.3042L62.1479 79.1C58.3813 76.275 58.6167 76.275 52.9667 76.275C40.9604 76.275 31.0729 83.8084 31.0729 92.9896C31.0729 102.171 40.725 109.704 52.9667 109.704C63.7958 109.704 72.7417 103.819 74.3896 95.8146C74.625 95.3438 74.625 44.2584 74.625 44.2584L108.996 57.2063C110.644 57.6771 112.292 56.7355 112.292 55.0875V43.3167C112.292 37.9021 108.996 32.9584 104.052 31.075Z"
      fill="white"
    />
    <path
      d="M61.6771 84.7501C61.6771 93.2251 52.7312 100.052 41.6667 100.052C30.6021 100.052 21.6562 93.2251 21.6562 84.7501C21.6562 76.2751 30.6021 69.448 41.6667 69.448C43.0792 69.448 44.7271 69.6834 46.1396 69.9188"
      stroke="#18193F"
      strokeWidth="6.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M61.6771 84.7501V12.948L91.8104 24.248C96.5187 25.8959 99.3438 30.3688 99.3438 35.3126V50.6147L76.9792 42.1397"
      stroke="#18193F"
      strokeWidth="6.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

            </div>
        </footer>
    );
};

export default Footer;