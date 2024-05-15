// Navbar.js

import { Link } from '@redwoodjs/router';

export default function Navbar() {
  const user = localStorage.getItem('user'); // Retrieve user information from local storage

  return (
    <header className="bg-white lg:py-2">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
          <div className="flex-shrink-0">
            <Link to="/" className="text-green-800 flex font-bold text-xl"> {/* Increased text size */}
              Xenon Pharmacy
            </Link>
          </div>

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link to="/medicament" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800"> Medicament </Link>
            <Link to="/contact" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800"> Contact </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {user ? ( // If user is logged in, display their name and a logout button
              <>
                <p className="text-base font-medium text-black">{user}</p>
                <Link to="/auth/login" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800"> Logout </Link>
              </>
            ) : (
              <>
                <Link to="/auth/login" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800"> Se Connecter </Link>
                <Link to="/auth/sign-up" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800"> S'inscrire </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
