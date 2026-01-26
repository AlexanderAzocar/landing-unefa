import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Background Gradient Blob REMOVED for clean professional look */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-unefa-blue text-white text-sm font-semibold mb-6 tracking-wide uppercase shadow-sm">
                        República Bolivariana de Venezuela - UNEFA
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        Planificación y <br />
                        <span className="text-unefa-blue dark:text-blue-400">
                            Evaluación de Proyectos
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 font-medium">
                        Explorando los fundamentos estratégicos de la gestión empresarial y los aspectos institucionales clave para el éxito de proyectos en Venezuela.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#unidad-8" className="px-8 py-4 rounded-full bg-unefa-blue text-white font-bold text-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Explorar Unidad 8
                        </a>
                        <a href="#unidad-9" className="px-8 py-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Explorar Unidad 9
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown className="text-slate-400 w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
