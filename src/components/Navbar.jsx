import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    const navLinks = [
        { title: 'Inicio', href: '#hero' },
        { title: 'Unidad 8', href: '#unidad-8' },
        { title: 'Unidad 9', href: '#unidad-9' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-colors duration-300 bg-unefa-blue border-b border-white/10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src="/logounefa.png" alt="Logo UNEFA" className="h-10 w-auto object-contain" />
                        <span className="text-2xl font-bold text-white tracking-wide hidden sm:block">
                            UNEFA
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-white hover:text-white/80 hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                                aria-label="Toggle Dark Mode"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-unefa-blue border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <div className="border-t border-white/10 pt-4 pb-2">
                                <button
                                    onClick={() => { toggleTheme(); setIsOpen(false); }}
                                    className="flex items-center w-full px-3 py-2 text-white hover:bg-white/10"
                                >
                                    {isDark ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
                                    {isDark ? "Modo Claro" : "Modo Oscuro"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
