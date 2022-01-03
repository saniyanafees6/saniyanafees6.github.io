import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../../assets/logo.svg';
const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-gray-500 lg:border-none">
          <div className="flex items-center">
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-140}
              duration={100}
            >
              <span className="sr-only">Saniya Nafees</span>
              <img className="h-10 w-auto" src={logo} alt="logo" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-140}
                  duration={500}
                  className="text-base font-medium text-white hover:text-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
