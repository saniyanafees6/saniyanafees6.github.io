import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import resume from '../../assets/resume.svg';
import email from '../../assets/email.svg';
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/saniyanafees6',
    icon: github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saniya-nafees/',
    icon: linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:saniyanafees6@gmail.com',
    icon: email,
  },
  {
    name: 'Resume',
    href: 'https://docs.google.com/document/d/1EjU12GEd35rU9dGP0OnXYQbvRcV38W1oB4p8-3C8ntc/edit?usp=sharing',
    icon: resume,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              target="_blank"
              rel="noreferrer"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500 h-6 w-6"
            >
              <img src={item.icon} alt={item.name} className="invert__svg" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; Copyright 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
