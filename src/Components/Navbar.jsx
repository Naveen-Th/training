import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/opportunities" className="text-white hover:text-gray-300">Opportunities</Link>
        </li>
        <li>
          <Link to="/operations" className="text-white hover:text-gray-300">Operations</Link>
        </li>
      </ul>
    </nav>
  );
}
