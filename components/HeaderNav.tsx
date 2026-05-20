import Link from "next/link";

export function HeaderNav() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🌱</span>
          <span>Intellicrop</span>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <li>
              <Link href="/#features" className="hover:text-amber-200">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#dashboard" className="hover:text-amber-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/#chatbot" className="hover:text-amber-200">
                AI Assistant
              </Link>
            </li>
            <li>
              <Link
                href="/weather"
                className="rounded-md bg-white px-3 py-1 font-semibold text-green-700"
              >
                Weather
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
