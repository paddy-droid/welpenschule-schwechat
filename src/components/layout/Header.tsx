'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/kontakt', label: 'Kontakt' },
];

const mobileTrainingLocations = [
  { href: '/mobiles-hundetraining', label: 'Schwechat' },
  { href: '/mobiles-hundetraining/fischamend', label: 'Fischamend' },
  { href: '/mobiles-hundetraining/schwadorf', label: 'Schwadorf' },
  { href: '/mobiles-hundetraining/ebenfurth', label: 'Ebenfurth' },
  { href: '/mobiles-hundetraining/gramatneusiedl', label: 'Gramatneusiedl' },
  { href: '/mobiles-hundetraining/goetzendorf', label: 'Götzendorf a. d. Leitha' },
  { href: '/mobiles-hundetraining/himberg', label: 'Himberg' },
  { href: '/mobiles-hundetraining/bruck-an-der-leitha', label: 'Bruck an der Leitha' },
];

const legalItems = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileRegionOpen, setIsMobileRegionOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isClient && isScrolled
      ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-2'
      : 'bg-white/95 shadow-sm py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 z-50 relative">
          <Logo width={160} height={60} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-gray-700 hover:text-yellow-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Regionen Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-sm font-semibold tracking-wide text-gray-700 hover:text-yellow-600 transition-colors py-2">
              Regionen <ChevronDown size={16} className="ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full -left-4 pt-2 pb-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                {mobileTrainingLocations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold shadow-md hover:shadow-lg transition-all px-6 rounded-full">
             <Link href="/kontakt">Anmeldung</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center z-50 relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isClient && (
        <>
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`fixed top-0 right-0 w-[85vw] sm:w-[320px] bg-white/95 backdrop-blur-xl z-50 h-[100dvh] lg:hidden transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex justify-end p-5 border-b border-gray-100/50">
              <div className="h-8"></div>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8 flex-nowrap h-full">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Menü</h3>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-semibold text-gray-900 hover:text-yellow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsMobileRegionOpen(!isMobileRegionOpen)}
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Regionen</h3>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform ${isMobileRegionOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`space-y-3 pl-2 border-l-2 border-yellow-200 overflow-hidden transition-all ${isMobileRegionOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {mobileTrainingLocations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-lg font-medium text-gray-700 hover:text-yellow-600 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <Button asChild size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-md rounded-xl py-6 text-lg">
                  <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>Anmeldung starten</Link>
                </Button>

                <div className="flex justify-center gap-6 pt-6 border-t border-gray-100">
                  {legalItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs font-medium text-gray-400 hover:text-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
