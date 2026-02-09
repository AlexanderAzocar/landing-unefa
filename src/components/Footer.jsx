import { BookOpen, Github, Mail, GraduationCap } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Unidad 8', href: '#unidad-8' },
        { name: 'Unidad 9', href: '#unidad-9' },
        { name: 'Marco Legal', href: '#marco-legal' },
        { name: 'Trabajos', href: '#trabajos' },
    ];

    return (
        <footer className="bg-slate-900 text-white">
            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-unefa-blue rounded-xl flex items-center justify-center">
                                <GraduationCap size={22} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">UNEFA</h3>
                                <p className="text-xs text-slate-400">Defensa Integral</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            Guía académica sobre Planificación y Evaluación de Proyectos.
                            Material de estudio para estudiantes del 8vo semestre.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Navegación
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-unefa-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Información
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-slate-400">
                                <BookOpen size={16} className="text-unefa-gold" />
                                <span>8vo Semestre</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-400">
                                <Mail size={16} className="text-unefa-gold" />
                                <span>Ingeniería de Sistemas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            &copy; {currentYear} UNEFA. Proyecto Académico.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>Desarrollado por</span>
                            <a
                                href="https://github.com/D13G0ARJ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-slate-300 hover:text-unefa-gold transition-colors"
                            >
                                <Github size={16} />
                                Diego Rodriguez
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
