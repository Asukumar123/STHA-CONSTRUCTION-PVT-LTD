"use client";
import Link from "next/link";
import { Menu} from "lucide-react";
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

  return (
    <div>
      <header className="fixed bg-[#111247] flex items-center justify-between px-4 text-2xl md:px-8 py-4 relative z-50 w-full">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative flex items-center">
              <div className="bg-red-600 text-white font-bold py-0 px-1 relative">
                STHA
                <span className="absolute text-red-600 top-0 right-0 translate-x-4 -translate-y-5 text-xl">
                  +
                </span>
              </div>
              <span className="text-white font-bold ml-2 text-xl">
                CONSTRUCTION
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
                  className="w-8 h-8 rounded-full border border-white"
                  height={32}
                  width={32}
                />
                <span>{user.displayName || "User"}</span>
              </div>
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
             <LayoutDashboard />
              </Link>
             
            </>
          ) : (
            <button
              onClick={handleGoogleRegister}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              Register
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          title="Menu"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div className="w-full sm:w-1/2 mt-[10px] bg-blue-900 h-[350px] p-6 relative flex flex-col">
            <button
              type="button"
              className="absolute top-8 right-4"
              onClick={() => setMenuOpen(false)}
              title="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="mt-12 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-lg ${
                    pathname === item.href
                      ? "text-red-500 font-bold"
                      : "text-white"
                  } hover:text-red-400 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="text-white mt-4">
                    Hi, {user.displayName || "User"}
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="bg-blue-600 text-white px-4 py-1 rounded block mt-2"
                  >
                   <LayoutDashboard />
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      signOut(auth);
                    }}
                    className="bg-red-600 text-white px-4 py-1 rounded mt-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleGoogleRegister();
                  }}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Register
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

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
      className={`${
        isActive
          ? "text-white font-semibold bg-[#FF0E0E] px-4 py-2 rounded-md"
          : "text-white"
      } hover:text-blue-400 transition-colors`}
    >
      {label}
    </Link>
  );
}
