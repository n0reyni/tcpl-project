// Navbar.js

import { Link, navigate, routes } from '@redwoodjs/router';
import { useAuth } from 'src/auth';

export default function Navbar() {
  const { isAuthenticated, logOut, currentUser } = useAuth();
  const handleLogout = () => {
    logOut();
    navigate(routes.login());
  }

  return (
    <header className="bg-white lg:py-2">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:shadow-lg lg:h-16 lg:px-8 lg:py-6">
          {isAuthenticated ? (
            <div className="flex-shrink-0">
                <Link to="/medicament" className="text-green-800 flex font-bold text-xl">
                  Xenon Pharmacy
                </Link>
              </div>) : (
                <Link to="/auth/login" className="text-green-800 flex font-bold text-xl">
                  Xenon Pharmacy
                </Link>
              )}

          <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
            <Link to="/medicament" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800">
              Home
            </Link>
            <Link to="/contact" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {isAuthenticated ? (
              <>
                <p className="text-base font-medium text-black">
                  {currentUser?.email.split('@')[0].toUpperCase()}
                </p>
                <button onClick={handleLogout} className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800">
                  Se déconnecter
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </>
            ) : (
              <>
                <Link to="/auth/login" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800">
                  Connexion
                </Link>
                <Link to="/auth/sign-up" className="text-base font-medium text-black transition-all duration-200 hover:text-green-800 focus:text-green-800">
                  Inscription
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
