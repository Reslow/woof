import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center justify-center">
            <Link href="/">
              <a>
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt=""
                />
              </a>
            </Link>
            <Link href="/HittaKennel">
              <a className="inline text-white m-4">Hitta Kennel</a>
            </Link>
            <Link href="/Info">
              <a className="inline text-white m-4">Vid val av kennel</a>
            </Link>
            <Link href="/About">
              <a className="inline text-white m-4">om oss</a>
            </Link>
          </div>

          <div className="ml-10 space-x-4">
            <Link href="/Login">
              <a className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
                Logga in
              </a>
            </Link>
            <Link href="/Register">
              <a className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                skapa konto
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
