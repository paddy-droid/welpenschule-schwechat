import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8 text-center text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
             <a href="https://www.instagram.com/hundeschule_willenskraft/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.02.042-4.482.02-6.052.083C4.684 2.164 3.633 2.503 2.815 3.32c-.82.818-1.157 1.87-1.24 3.44C1.493 8.33 1.475 8.79 1.475 12.81c0 4.02.018 4.48.083 6.05.083 1.57.42 2.622 1.24 3.44.818.818 1.87 1.156 3.44 1.24 1.57.062 2.03.082 6.05.082s4.48-.02 6.05-.082c1.57-.084 2.622-.422 3.44-1.24.818-.818 1.156-1.87 1.24-3.44.062-1.57.082-2.03.082-6.05s-.02-4.48-.082-6.05c-.084-1.57-.422-2.622-1.24-3.44-.818-.818-1.87-1.157-3.44-1.24C16.795 2.02 16.335 2 12.315 2zm0 1.8c4.02.042 4.38.018 5.9.082 1.34.064 2.08.33 2.57.82.49.49.756 1.23.82 2.57.063 1.52.082 1.88.082 5.9s-.02 4.38-.082 5.9c-.064 1.34-.33 2.08-.82 2.57-.49.49-1.23.756-2.57.82-1.52.063-1.88.082-5.9.082s-4.38-.02-5.9-.082c-1.34-.064-2.08-.33-2.57-.82-.49-.49-.756-1.23-.82-2.57C3.595 16.38 3.575 16.02 3.575 12s.02-4.38.082-5.9c.064-1.34.33-2.08.82-2.57.49-.49 1.23-.756 2.57-.82 1.52-.063 1.88-.082 5.9-.082zM12 7.188A4.812 4.812 0 1012 16.812 4.812 4.812 0 0012 7.188zm0 7.824a3.012 3.012 0 110-6.024 3.012 3.012 0 010 6.024zM16.95 6.075a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.facebook.com/Hundeschule.Willenskraft" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-500">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
        </div>
        <div className="flex justify-center gap-4 mb-4">
            <Link href="/impressum"><p className="hover:text-yellow-500">Impressum</p></Link>
            <Link href="/datenschutz"><p className="hover:text-yellow-500">Datenschutz</p></Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Hundeschule Willenskraft. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}