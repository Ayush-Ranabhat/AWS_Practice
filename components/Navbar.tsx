'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'resources', label: 'Resources', href: '#resources' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-primary-600 to-primary-700 shadow-azure">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-azure font-mono tracking-wide">
              Ayush Ranabhat
            </h1>
          </div>
          
          <ul className="hidden sm:flex list-none gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`transition-colors duration-300 font-medium text-sm ${
                    activeLink === link.id
                      ? 'text-azure'
                      : 'text-white hover:text-azure'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
