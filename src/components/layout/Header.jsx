import { FaMugHot } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-md items-center gap-4 px-4 py-5">
        <div className="rounded-2xl bg-amber-600 p-3 text-white">
          <FaMugHot size={26} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">The Pipe Cafe</h1>

          <p className="text-sm text-gray-500">QR Menü</p>
        </div>
      </div>
    </header>
  );
}
