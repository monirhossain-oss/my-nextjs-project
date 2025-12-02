import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Sorry, the resource you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
