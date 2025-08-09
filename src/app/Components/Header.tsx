"use client";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  onAuthStateChanged,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { LayoutDashboard } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleGoogleRegister = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Services", label: "Service" },
    { href: "/About", label: "About" },
    { href: "/ContactUs", label: "Contact" },
  ];
   const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "STHA Construction",
    "url": "https://sthaconstruction.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sthaconstruction.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
   
    <div>
      <header className="fixed bg-[#111247] flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 relative z-50 w-full shadow-lg">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative flex items-center">
              <div className="bg-red-600 text-white font-bold py-1 px-2 relative text-sm sm:text-base">
                STHA
                <span className="absolute text-red-600 top-0 right-0 translate-x-3 sm:translate-x-4 -translate-y-4 sm:-translate-y-5 text-base sm:text-xl">
                  +
                </span>
              </div>
              <span className="text-white font-bold ml-2 text-sm sm:text-base lg:text-xl">
                CONSTRUCTION
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              pathname={pathname}
            />
          ))}
          {user ? (
            <>
              <div className="flex items-center space-x-2 text-white">
                <Image
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  className="w-6 h-6 xl:w-8 xl:h-8 rounded-full border border-white"
                  height={32}
                  width={32}
                />
                <span className="text-sm xl:text-base truncate max-w-20">
                  {user.displayName?.split(" ")[0] || "User"}
                </span>
              </div>
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors"
                title="Dashboard"
              >
                <LayoutDashboard size={18} />
              </Link>
            </>
          ) : (
            <button
              onClick={handleGoogleRegister}
              className="bg-green-600 text-white px-3 xl:px-4 py-2 rounded text-sm xl:text-base hover:bg-green-700 transition-colors"
            >
              Register
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white lg:hidden menu-button p-2"
          title="Menu"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="mobile-menu w-full sm:w-80 ml-auto bg-[#111247] h-full p-6 relative flex flex-col shadow-2xl">
            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(false)}
              title="Close Menu"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="mt-16">
              {/* User Info in Mobile Menu */}
              {user && (
                <div className="flex items-center space-x-3 mb-8 p-4 bg-white/10 rounded-lg">
                  <Image
                    src={user.photoURL || "/default-avatar.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-white"
                    height={40}
                    width={40}
                  />
                  <div className="text-white">
                    <div className="font-semibold text-sm">{user.displayName}</div>
                    <div className="text-xs text-gray-300 truncate">{user.email}</div>
                  </div>
                </div>
              )}

              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg py-2 px-4 rounded-lg transition-all ${
                      pathname === item.href
                        ? "text-white font-bold bg-red-600"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {user ? (
                  <div className="pt-4 border-t border-white/20 space-y-3">
                    <Link
                      href="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <LayoutDashboard size={20} />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        signOut(auth);
                      }}
                      className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-white/20">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleGoogleRegister();
                      }}
                      className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Register
                    </button>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  
   </>
)}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm xl:text-base transition-all duration-200 ${
        isActive
          ? "text-white font-semibold bg-[#FF0E0E] px-3 xl:px-4 py-2 rounded-md"
          : "text-gray-200 hover:text-white px-3 xl:px-4 py-2 rounded-md hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );
}