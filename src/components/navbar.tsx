"use client";

import React, { useState } from "react";
import { Bell, Menu } from "lucide-react"; // Add Menu icon
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-30">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-blue-800">NotifyNow</span>
      </div>

      {/* Navigation menu for larger screens */}
      <nav className="space-x-4 items-center hidden md:flex">
        <a
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-primary"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-primary"
        >
          FAQ
        </a>
        <Button className="bg-primary text-white px-6 hover:bg-accent transition">
          Get Started
        </Button>
      </nav>

      {/* Menu Icon for small screens */}
      <div className="md:hidden">
        <Menu
          onClick={toggleMenu}
          className="h-6 w-6 text-primary cursor-pointer"
        />
      </div>

      {/* Toggleable menu for small screens */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-20"
            onClick={toggleMenu} // Clicking the overlay closes the menu
          ></div>

          {/* Mobile menu */}
          <nav className="absolute top-[4rem] right-3 bg-white shadow-lg shadow-primary/40 rounded-lg p-4 flex flex-row items-center space-x-4 w-[22rem] z-30">
            <div className="flex flex-grow space-x-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-primary"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-primary"
              >
                FAQ
              </a>
            </div>
            <Button className="bg-primary text-white px-6 py-2 hover:bg-accent transition">
              Get Started
            </Button>
          </nav>
        </>
      )}

      {/* Icon and text for larger screens */}
      <div className="absolute right-[5rem] top-[10rem] hidden lg:block">
        <p className="text-gray-600 text-sm font-medium">NotifyNow in Action</p>
        <svg
          version="1.1"
          id="ios7_x5F_arrows_1_"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 128 128"
          className="w-10 h-10 mt-2 mx-10 text-blue-400 fill-current"
        >
          <g id="_x32_9_1_">
            <path
              d="M121.7 90.6 85.9 54.7l-4.5 4.5 28.1 28.2H50c-22.4 0-40.5-18.2-40.5-40.6S27.7 6.2 50 6.2V0C24.2 0 3.3 21 3.3 46.8S24.2 93.6 50 93.6h60l-28.8 28.9 4.5 4.5 36.1-36.2-.1-.1v-.1z"
              id="icon_12_"
            />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
