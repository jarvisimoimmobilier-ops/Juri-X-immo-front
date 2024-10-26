import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../public/logo.png'
import Transition from '../../utils/Transition';

function Header() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between  h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-5">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="AIWorxS">
                            <MySvgComponent />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop menu links */}
                        <ul className="flex grow flex-wrap items-center font-medium">
                            <li>
                                <Link
                                    to="/brands"
                                    className="text-gray-600 hover:text-gray-900  px-5
                                     py-2 flex items-center transition duration-150 ease-in-out"
                                >
                                    Tableau de bord
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover:text-gray-900  px-5
                                     py-2 flex items-center transition duration-150 ease-in-out"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        {/* Desktop CTA on the right */}
                        <div className="flex justify-end flex-wrap items-center">
                            <button>
                                <Link to="/login" className="btn-sm text-teal-500 rounded-3xl">
                                    Connexion
                                </Link>
                            </button>
                            <button>
                                <Link to="/register" className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                                    S'inscrire
                                </Link>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile menu */}
                    <div className="inline-flex md:hidden">
                        {/* Hamburger button */}
                        <button
                            ref={trigger}
                            className={`hamburger ${mobileNavOpen && 'active'}`}
                            aria-controls="mobile-nav"
                            aria-expanded={mobileNavOpen}
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900  transition duration-150 ease-in-out"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="4" width="24" height="2" rx="1" />
                                <rect y="11" width="24" height="2" rx="1" />
                                <rect y="18" width="24" height="2" rx="1" />
                            </svg>
                        </button>

                        {/*Mobile navigation */}
                        <Transition
                            show={mobileNavOpen}
                            tag="ul"
                            className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white  shadow-lg"
                            enter="transition ease-out duration-200 transform"
                            enterStart="opacity-0 -translate-x-full"
                            enterEnd="opacity-100 translate-x-0"
                            leave="transition ease-out duration-200"
                            leaveStart="opacity-100"
                            leaveEnd="opacity-0"
                        >
                            <nav
                                id="mobile-nav"
                                ref={mobileNav}
                                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
                            >
                                <div className="py-6 pr-4 pl-20">
                                    {/* Logo */}
                                    <Link to="/" className="inline-block mb-4" aria-label="AIWorxS">
                                        <MySvgComponent />
                                    </Link>
                                    {/* Links */}
                                    <ul>
                                        <li>
                                            <Link to="/brands" className="flex text-gray-600 hover:text-gray-900  py-2">
                                                Tableau de bord
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact" className="flex text-gray-600 hover:text-gray-900  py-2">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="font-medium w-full inline-flex items-center justify-center
                                                 border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out"
                                            >
                                                S'inscrire
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Transition>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

const MySvgComponent = () => {
    return (
        <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                </linearGradient>
                <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </linearGradient>
            </defs>
            <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#menulogo_a)" />
            <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#menulogo_b)" />
        </svg>
    );
};
