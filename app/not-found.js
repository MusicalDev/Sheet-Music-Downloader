import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-dark px-4 sm:px-6 lg:px-8 font-outfit">
      <div className="flex flex-col w-full h-full text-center justify-center">
        <h1 className="text-9xl  font-islandMoments text-[#C2FF13]">404</h1>

        <p className="mt-6 text-base leading-7  text-lighthover">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center rounded-md bg-gray-900 border-1 border-lighthover px-5 py-3 text-sm font-semibold text-lighthover shadow-sm hover:bg-light/5 focus:outline-none focus:ring-2 focus:ring-lighthover focus:ring-offset-2 hover:scale-98"
          >
            Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}