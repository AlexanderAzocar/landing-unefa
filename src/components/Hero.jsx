import { motion } from 'framer-motion';
import {
    ChevronDown,
    BookOpen,
    GraduationCap,
    FileText,
    Users,
    Award,
    TrendingUp,
    Target
} from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-unefa-blue/10 dark:bg-unefa-gold/15 border border-unefa-blue/20 dark:border-unefa-gold/20 mb-6">
                            <GraduationCap size={18} className="text-unefa-blue dark:text-unefa-gold" />
                            <span className="text-sm font-semibold text-unefa-blue dark:text-unefa-gold tracking-wide">
                                UNEFA - 8vo Semestre
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                            Planificación y{' '}
                            <span className="relative inline-block">
                                <span className="text-unefa-blue dark:text-blue-400">Evaluación</span>
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-full h-3 bg-unefa-gold/30 dark:bg-unefa-gold/20 -z-10"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                            <br />
                            <span className="text-slate-600 dark:text-slate-400">de Proyectos</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-8 leading-relaxed">
                            Domina los fundamentos de la gestión empresarial, aspectos legales e institucionales
                            para el desarrollo de proyectos exitosos en el contexto venezolano.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-unefa-blue/10 dark:bg-unefa-blue/20 rounded-xl flex items-center justify-center">
                                    <BookOpen size={22} className="text-unefa-blue dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">2</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Unidades</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-unefa-gold/10 dark:bg-unefa-gold/20 rounded-xl flex items-center justify-center">
                                    <FileText size={22} className="text-unefa-gold" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">6+</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Trabajos</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                    <Award size={22} className="text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Evaluable</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#unidad-8"
                                className="group px-6 py-3.5 rounded-xl bg-unefa-blue text-white font-bold text-sm hover:bg-unefa-blue/90 transition-all shadow-lg shadow-unefa-blue/25"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center gap-2">
                                    Explorar Contenido
                                    <ChevronDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                            <motion.a
                                href="#trabajos"
                                className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm border-2 border-slate-200 dark:border-slate-700 hover:border-unefa-gold transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Ver Trabajos
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column - Image & Floating Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        {/* Main Image Container */}
                        <div className="relative">
                            {/* Decorative Background */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-unefa-blue/20 to-unefa-gold/20 rounded-3xl blur-2xl" />

                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                                    alt="Estudiantes universitarios colaborando en proyecto"
                                    className="w-full h-[400px] lg:h-[500px] object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                {/* Bottom Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <GraduationCap size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">Defensa Integral</p>
                                            <p className="text-white/70 text-sm">Ingeniería de Sistemas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Top Right */}
                            <motion.div
                                className="absolute -top-4 -right-4 lg:-right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-unefa-blue/10 dark:bg-unefa-blue/20 rounded-xl flex items-center justify-center">
                                        <TrendingUp size={20} className="text-unefa-blue dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Viabilidad</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Económica</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card - Bottom Left */}
                            <motion.div
                                className="absolute -bottom-4 -left-4 lg:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-unefa-gold/20 rounded-xl flex items-center justify-center">
                                        <Target size={20} className="text-unefa-gold" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Aspectos</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">Institucionales</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card - Middle Right */}
                            <motion.div
                                className="absolute top-1/2 -right-2 lg:-right-6 transform -translate-y-1/2 bg-unefa-blue text-white p-4 rounded-2xl shadow-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <div className="flex items-center gap-3">
                                    <Users size={24} />
                                    <div>
                                        <p className="text-xs text-blue-200">Trabajo en</p>
                                        <p className="text-sm font-bold">Equipo</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 tracking-wider uppercase">Explorar</span>
                    <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-unefa-blue dark:bg-unefa-gold rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
