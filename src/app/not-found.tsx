import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <Image
        src="/Assets/Progress.gif" // replace with your actual image path
        alt="Work in Progress"
        width={300}
        height={300}
        className="mb-6"
      />
      <h1 className="text-5xl font-bold text-yellow-600">Work in Progress</h1>
      <p className="text-xl mt-4 text-gray-700">This page or service is currently unavailable.</p>
      <p className="mt-2 text-gray-500">We’re working hard to bring it to you soon!</p>
    <Link href="/" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
      Go back home
    </Link>
    </div>
  )
}
