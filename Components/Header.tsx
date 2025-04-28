"use client"; // <-- Important if you're using Next.js app router
import Link from "next/link";
import { Menu} from "lucide-react"; // X is close icon
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Services", label: "Service" },
    { href: "/About", label: "About" },
    { href: "/ContactUs", label: "Contact" },
  ];

  return (
    <div>
      <header className="fixed bg-[#111247] flex items-center justify-between px-4 text-2xl md:px-8 py-4 relative z-50">
        <div className="flex items-center">
          <Link href="/">
          <div className="relative flex items-center">
            <div className="bg-red-600 text-white font-bold py-0 px-1 relative">
              STHA
              <span className="absolute text-red-600 top-0 right-0 translate-x-4 -translate-y-5 text-xl">+</span>
            </div>
            <span className="text-white font-bold ml-2 text-xl">CONSTRUCTION</span>
          </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
          ))}
        </div>

        <button
          className="text-white md:hidden"
          title="Menu"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Sheet */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-full sm:w-1/2 mt-[10px] bg-blue-900 h-[280px] p-6 relative flex flex-col">
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-8 right-4"
              onClick={() => setMenuOpen(false)}
              title="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav Links */}
            <nav className="mt-12 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg ${
                    pathname === item.href ? "text-red-500 font-bold" : "text-white"
                  } hover:text-red-400 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-white font-semibold bg-[#FF0E0E] px-4 py-2 rounded-md" : "text-white"} hover:text-blue-400 transition-colors`}
    >
      {label}
    </Link>
  );
}
