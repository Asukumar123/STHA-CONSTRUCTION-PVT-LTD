"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.push("/"); // Redirect to home if not logged in
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!user) return <div className="p-8 text-white">Loading dashboard...</div>;

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <h1 className="text-4xl font-bold mb-8">
        🎉 Welcome Back, {user.displayName?.split(" ")[0]}
      </h1>

      {/* Profile Card */}
      <div className="bg-[#1e1f4b] p-6 rounded-2xl shadow-lg mb-10 flex items-center space-x-6">
        <Image
          src={user.photoURL || "/default-avatar.png"}
          alt="User Photo"
          width={80}
          height={80}
          className="rounded-full border-2 border-white"
        />
        <div>
          <h2 className="text-2xl font-semibold">{user.displayName}</h2>
          <p className="text-sm text-gray-300">{user.email}</p>
        </div>
        <button
          onClick={() => signOut(auth)}
          className="ml-auto bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>

      {/* Orders Section Placeholder */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">🛒 Your Orders</h3>
        <div className="rounded-lg p-6 bg-[#1f1f4b] text-gray-400 text-sm">
          No orders available.
        </div>
      </div>

      {/* Payments Section Placeholder */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">💳 Your Payments</h3>
        <div className="rounded-lg p-6 bg-[#1f1f4b] text-gray-400 text-sm">
          No payment records found.
        </div>
      </div>
    </div>
  );
}
