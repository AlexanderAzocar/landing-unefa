import { motion } from 'framer-motion';
import {
    CheckCircle,
    BookOpen,
    FileText,
    Users,
    PieChart,
    Calendar,
    Target,
    Award,
    TrendingUp,
    Layers,
    Clock,
    GraduationCap,
    ClipboardCheck,
    BarChart3,
    Briefcase,
    ScrollText
} from 'lucide-react';

const studyPlan = [
    {
        phase: 'Fase 1',
        title: 'Fundamentos Teóricos',
        weeks: 'Semanas 1-4',
        icon: BookOpen,
        color: 'blue',
        topics: [
            'Introducción a los proyectos de inversión',
            'Metodologías de formulación',
            'Estudio de mercado y demanda',
            'Análisis del entorno empresarial'
        ]
    },
    {
        phase: 'Fase 2',
        title: 'Aspectos Técnicos y Legales',
        weeks: 'Semanas 5-8',
        icon: ScrollText,
        color: 'amber',
        topics: [
            'Estudio técnico del proyecto',
            'Marco legal venezolano',
            'Constitución de empresas',
            'Obligaciones tributarias (SENIAT)'
        ]
    },
    {
        phase: 'Fase 3',
        title: 'Evaluación Financiera',
        weeks: 'Semanas 9-12',
        icon: BarChart3,
        color: 'emerald',
        topics: [
            'Flujo de caja proyectado',
            'Cálculo de VAN y TIR',
            'Punto de equilibrio',
            'Análisis de sensibilidad'
        ]
    },
    {
        phase: 'Fase 4',
        title: 'Proyecto Final',
        weeks: 'Semanas 13-16',
        icon: Briefcase,
        color: 'purple',
        topics: [
            'Integración de componentes',
            'Presentación ejecutiva',
            'Defensa del proyecto',
            'Retroalimentación y mejoras'
        ]
    }
];

const methodology = [
    {
        icon: Target,
        title: 'Aprendizaje Basado en Proyectos',
        description: 'Desarrollo de un proyecto real de inversión a lo largo del semestre.'
    },
    {
        icon: Users,
        title: 'Trabajo Colaborativo',
        description: 'Equipos de trabajo que simulan entornos empresariales reales.'
    },
    {
        icon: ClipboardCheck,
        title: 'Evaluación Continua',
        description: 'Entregas parciales con retroalimentación para mejora constante.'
    },
    {
        icon: TrendingUp,
        title: 'Casos de Estudio',
        description: 'Análisis de proyectos exitosos en el contexto venezolano.'
    }
];

const colorClasses = {
    blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800'
    },
    amber: {
        bg: 'bg-amber-500',
        light: 'bg-amber-100 dark:bg-amber-900/30',
        text: 'text-amber-600 dark:text-amber-400',
        border: 'border-amber-200 dark:border-amber-800'
    },
    emerald: {
        bg: 'bg-emerald-500',
        light: 'bg-emerald-100 dark:bg-emerald-900/30',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'border-emerald-200 dark:border-emerald-800'
    },
    purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800'
    }
};

function LearningSection() {
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-500 via-emerald-500 to-purple-500" />
                <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/5 to-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full mb-6"
                    >
                        <GraduationCap size={18} className="text-unefa-blue dark:text-unefa-gold" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
                            Plan de Estudios
                        </span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        Metodología de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-unefa-blue to-purple-600 dark:from-unefa-gold dark:to-amber-400">
                            Aprendizaje
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Un programa estructurado en 4 fases que te guiará desde los fundamentos teóricos
                        hasta la presentación de tu proyecto de inversión.
                    </p>
                </motion.div>

                {/* Study Plan Timeline */}
                <div className="mb-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {studyPlan.map((phase, index) => {
                            const Icon = phase.icon;
                            const colors = colorClasses[phase.color];
                            return (
                                <motion.div
                                    key={phase.phase}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Connector Line */}
                                    {index < studyPlan.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 dark:from-slate-600 to-transparent z-0" />
                                    )}

                                    <div className={`relative bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 h-full`}>
                                        {/* Phase Badge */}
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 ${colors.light} rounded-full mb-4`}>
                                            <span className={`text-xs font-bold ${colors.text}`}>{phase.phase}</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400">• {phase.weeks}</span>
                                        </div>

                                        {/* Icon */}
                                        <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                                            <Icon size={28} className="text-white" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                            {phase.title}
                                        </h3>

                                        {/* Topics */}
                                        <ul className="space-y-2">
                                            {phase.topics.map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                    <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${colors.text}`} />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Methodology Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            Enfoque Pedagógico
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Nuestra metodología combina teoría y práctica para una formación integral
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {methodology.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-unefa-blue/50 dark:hover:border-unefa-gold/50 transition-all"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-unefa-blue to-blue-600 dark:from-unefa-gold dark:to-amber-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <Icon size={24} className="text-white dark:text-slate-900" />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-unefa-blue/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-unefa-gold/20 rounded-full blur-3xl" />

                        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Calendar size={32} className="text-white" />
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-1">16</p>
                                <p className="text-sm text-white/60 font-medium">Semanas</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Layers size={32} className="text-unefa-gold" />
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-1">4</p>
                                <p className="text-sm text-white/60 font-medium">Fases</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FileText size={32} className="text-white" />
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-1">6+</p>
                                <p className="text-sm text-white/60 font-medium">Entregas</p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Award size={32} className="text-unefa-gold" />
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-1">1</p>
                                <p className="text-sm text-white/60 font-medium">Proyecto Final</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default LearningSection;
