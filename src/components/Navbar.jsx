import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
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

    useEffect(() => {
        const handleScroll = () => {
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        { title: 'Sobre la Materia', href: '#sobre' },
        { title: 'Unidad 8', href: '#unidad-8' },
        { title: 'Unidad 9', href: '#unidad-9' },
        { title: 'Trabajos', href: '#trabajos' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full z-50 transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <motion.a
                        href="#hero"
                        className="flex-shrink-0 flex items-center gap-3 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-unefa-blue shadow-lg shadow-unefa-blue/20">
                            <img
                                src="/logounefa.png"
                                alt="Logo UNEFA"
                                className="h-8 w-auto object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <GraduationCap
                                size={24}
                                className="hidden text-white"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-xl font-bold tracking-tight transition-colors text-slate-900 dark:text-white">
                                UNEFA
                            </p>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.title}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all group text-slate-600 dark:text-slate-300 hover:text-unefa-blue dark:hover:text-unefa-gold hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                {link.title}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all group-hover:w-1/2 bg-unefa-blue dark:bg-unefa-gold" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2.5 rounded-xl transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            aria-label="Toggle Dark Mode"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isDark ? 'dark' : 'light'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden p-2.5 rounded-xl transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'open' : 'closed'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-xl"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors"
                                >
                                    <span className="w-2 h-2 rounded-full bg-unefa-blue dark:bg-unefa-gold" />
                                    {link.title}
                                </motion.a>
                            ))}
                            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                                <motion.button
                                    onClick={() => { toggleTheme(); setIsOpen(false); }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="flex items-center gap-3 w-full px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors"
                                >
                                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                    {isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
