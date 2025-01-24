import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Movie App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-300 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="text-white hover:text-blue-300 transition duration-300"
                >
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-lg font-semibold">FQ Include</h1>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
