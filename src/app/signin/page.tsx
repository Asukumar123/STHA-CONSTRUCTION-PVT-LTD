import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    const result = await signIn("credentials", {
      name,
      phoneNumber,
      email,
      redirect: true,
      callbackUrl: "/",
    });

    if (!result?.ok) {
      setError("Sign in failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Sign In</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border"
          required
        />
        <input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mb-2 p-2 border"
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign In
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">OR</p>
          <button
            type="button"
            className="w-full mt-2 bg-red-500 text-white p-2 rounded"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
