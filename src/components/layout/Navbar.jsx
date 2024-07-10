import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#fff] bg-opacity-60 border border-b-[#eee] backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* BURGER MENU */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleDropdown}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isDropdownOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`h-6 w-6 ${isDropdownOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* NAME LOGO */}
          <div className="flex-shrink-0 items-center hidden md:block">
            <a className="h-8 w-auto text-sm md:text-lg font-medium text-[#282828] rounded-md px-3 py-2 hover:bg-gray-700 hover:text-white" href="#">nm.</a>
          </div>
          {/* PAGE TITLES */}
          <div className="hidden sm:ml-6 md:block">
            <div className="flex space-x-4">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#282828] hover:bg-gray-700 hover:text-white">home</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#282828] hover:bg-gray-700 hover:text-white">about</a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[#282828] hover:bg-gray-700 hover:text-white">resume</a>
            </div>
          </div>
          {/* SOCIALS */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="https://github.com/dev-namra" className="text-[#282828] hover:text-white"><FontAwesomeIcon icon={faGithub} className="h-6 w-6 mx-2" /></a>
            <a href="https://www.linkedin.com/in/namra-mahak/" className="text-[#282828] hover:text-white"><FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 mx-2" /></a>
          </div>
        </div>
      </div>
      {/* DROP DOWN LIST */}
      {isDropdownOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">home</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">resume</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
