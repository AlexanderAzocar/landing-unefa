import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    GraduationCap,
    Layers,
    ArrowRight,
    BookMarked
} from 'lucide-react';
import { useState } from 'react';

const UnitSection = ({ id, title, topics, isRightAligned }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Colores según la unidad
    const theme = isRightAligned ? {
        gradient: 'from-purple-500 via-violet-500 to-pink-500',
        gradientBg: 'from-purple-50 via-violet-50/30 to-white dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900',
        primary: 'purple-500',
        primaryDark: 'purple-600',
        accent: 'pink-500',
        badge: 'bg-purple-500/10 dark:bg-purple-500/20 border-purple-500/20',
        badgeText: 'text-purple-600 dark:text-purple-400',
        buttonBg: 'from-purple-500 to-violet-600',
        blob1: 'bg-purple-500/10',
        blob2: 'bg-pink-500/10',
        icon: GraduationCap,
        subtitle: 'Profundiza en los aspectos institucionales y la viabilidad de proyectos'
    } : {
        gradient: 'from-unefa-blue via-blue-400 to-cyan-500',
        gradientBg: 'from-slate-50 via-blue-50/30 to-white dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900',
        primary: 'unefa-blue',
        primaryDark: 'blue-600',
        accent: 'cyan-500',
        badge: 'bg-unefa-blue/10 dark:bg-unefa-blue/20 border-unefa-blue/20',
        badgeText: 'text-unefa-blue dark:text-blue-400',
        buttonBg: 'from-unefa-blue to-blue-600',
        blob1: 'bg-blue-500/10',
        blob2: 'bg-cyan-500/10',
        icon: BookOpen,
        subtitle: 'Explora los fundamentos de la gestión empresarial y aspectos legales'
    };

    const Icon = theme.icon;

    return (
        <section id={id} className={`py-24 md:py-32 bg-gradient-to-br ${theme.gradientBg} relative overflow-hidden`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradient}`} />
                <div className={`absolute -top-40 -right-40 w-96 h-96 ${theme.blob1} rounded-full blur-3xl`} />
                <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${theme.blob2} rounded-full blur-3xl`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${theme.badge} border rounded-full mb-6`}>
                        <Icon size={18} className={theme.badgeText} />
                        <span className={`text-sm font-bold ${theme.badgeText}`}>Contenido Académico</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {theme.subtitle}
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Topics Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl sticky top-28">
                            <div className={`flex items-center gap-3 px-4 py-3 mb-4 bg-gradient-to-r ${theme.buttonBg} rounded-2xl`}>
                                <Layers size={20} className="text-white" />
                                <span className="font-bold text-white">{topics.length} Temas</span>
                            </div>
                            <div className="space-y-2">
                                {topics.map((topic, index) => (
                                    <button
                                        key={topic.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                                            activeIndex === index
                                                ? `bg-gradient-to-r ${theme.buttonBg} text-white shadow-lg`
                                                : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                                                activeIndex === index
                                                    ? 'bg-white/20 text-white'
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                                            }`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="font-medium text-sm truncate">{topic.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Active Topic Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-xl"
                            >
                                {/* Topic Header */}
                                <div className="flex items-start gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${theme.buttonBg} rounded-2xl flex items-center justify-center shadow-xl`}>
                                        <BookMarked size={32} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <span className={`text-sm font-bold ${theme.badgeText} uppercase tracking-wider`}>
                                            Tema {String(activeIndex + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                                            {topics[activeIndex].title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Topic Content */}
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    {topics[activeIndex].content.split('\n').map((line, idx) => (
                                        line.trim() && (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-3 mb-4"
                                            >
                                                <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                                    isRightAligned ? 'bg-purple-500' : 'bg-unefa-blue dark:bg-blue-400'
                                                }`} />
                                                <span
                                                    className="text-slate-600 dark:text-slate-300 leading-relaxed"
                                                    dangerouslySetInnerHTML={{
                                                        __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>')
                                                    }}
                                                />
                                            </motion.div>
                                        )
                                    ))}
                                </div>

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <button
                                        onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                                        disabled={activeIndex === 0}
                                        className={`flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:${theme.badgeText} disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
                                    >
                                        <ArrowRight size={18} className="rotate-180" />
                                        Anterior
                                    </button>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        {activeIndex + 1} de {topics.length}
                                    </span>
                                    <button
                                        onClick={() => setActiveIndex(prev => Math.min(topics.length - 1, prev + 1))}
                                        disabled={activeIndex === topics.length - 1}
                                        className={`flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:${theme.badgeText} disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
                                    >
                                        Siguiente
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UnitSection;
