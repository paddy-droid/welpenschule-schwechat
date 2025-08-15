import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Welpenschule Neusiedl
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/kurse" className="text-gray-600 hover:text-gray-900">Kurse</Link>
          <Link href="/kontakt" className="text-gray-600 hover:text-gray-900">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}