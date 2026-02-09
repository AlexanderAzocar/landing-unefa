import { motion } from 'framer-motion';
import {
    Target,
    Lightbulb,
    Users,
    TrendingUp,
    Shield,
    BookOpen,
    GraduationCap,
    Clock,
    Award,
    Zap,
    ArrowRight,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

const features = [
    {
        icon: Target,
        title: 'Objetivos Claros',
        description: 'Formulación y evaluación de proyectos de inversión con enfoque práctico y aplicable.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: Lightbulb,
        title: 'Pensamiento Estratégico',
        description: 'Desarrollo de habilidades analíticas para la toma de decisiones empresariales.',
        gradient: 'from-amber-500 to-yellow-500'
    },
    {
        icon: Users,
        title: 'Trabajo Colaborativo',
        description: 'Proyectos en equipo que simulan entornos laborales reales.',
        gradient: 'from-emerald-500 to-green-500'
    },
    {
        icon: TrendingUp,
        title: 'Viabilidad Económica',
        description: 'Análisis financiero, VAN, TIR y punto de equilibrio de proyectos.',
        gradient: 'from-violet-500 to-purple-500'
    },
    {
        icon: Shield,
        title: 'Marco Legal',
        description: 'Constitución empresarial, obligaciones tributarias y permisología.',
        gradient: 'from-rose-500 to-red-500'
    },
    {
        icon: BookOpen,
        title: 'Casos Reales',
        description: 'Estudio de proyectos venezolanos y su contexto institucional.',
        gradient: 'from-orange-500 to-amber-500'
    }
];

const stats = [
    { value: '8vo', label: 'Semestre', icon: GraduationCap, color: 'blue' },
    { value: '3', label: 'Créditos', icon: Award, color: 'gold' },
    { value: '48', label: 'Horas', icon: Clock, color: 'purple' },
    { value: '100%', label: 'Práctico', icon: Zap, color: 'emerald' }
];

function AboutSection() {
    return (
        <section id="sobre" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-unefa-blue/10 to-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-unefa-gold/10 to-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-unefa-blue/5 to-transparent rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-unefa-blue/10 to-purple-500/10 border border-unefa-blue/20 rounded-full mb-6"
                        >
                            <Sparkles size={16} className="text-unefa-blue dark:text-unefa-gold" />
                            <span className="text-sm font-bold text-unefa-blue dark:text-unefa-gold tracking-wide uppercase">
                                Acerca de la Materia
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            Formación integral en{' '}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-unefa-blue to-purple-600 dark:from-unefa-gold dark:to-amber-400">
                                    gestión de proyectos
                                </span>
                                <motion.div
                                    className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-unefa-gold/40 to-purple-500/30 -z-10 rounded-full"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            Esta asignatura proporciona los conocimientos teórico-prácticos necesarios
                            para la formulación, evaluación y control de proyectos de inversión,
                            con énfasis en el contexto venezolano y las normativas vigentes.
                        </p>

                        {/* Quick Benefits */}
                        <div className="space-y-3">
                            {['Metodología práctica y aplicable', 'Casos de estudio reales', 'Preparación profesional integral'].map((benefit, idx) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                                        <CheckCircle2 size={14} className="text-white" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                const isColored = index === 0 || index === 3;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        className={`relative p-6 rounded-3xl overflow-hidden ${
                                            isColored
                                                ? index === 0
                                                    ? 'bg-gradient-to-br from-unefa-blue to-blue-600 text-white'
                                                    : 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
                                                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                                        } shadow-xl ${isColored ? 'shadow-unefa-blue/20' : 'shadow-slate-200/50 dark:shadow-none'}`}
                                    >
                                        {/* Decorative Pattern */}
                                        {isColored && (
                                            <div className="absolute inset-0 opacity-10" style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                                            }} />
                                        )}

                                        <div className="relative">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                                                isColored
                                                    ? 'bg-white/20'
                                                    : index === 1
                                                        ? 'bg-gradient-to-br from-unefa-gold/20 to-amber-500/20'
                                                        : 'bg-gradient-to-br from-purple-500/20 to-violet-500/20'
                                            }`}>
                                                <Icon size={24} className={isColored ? 'text-white' : index === 1 ? 'text-unefa-gold' : 'text-purple-500'} />
                                            </div>
                                            <p className={`text-4xl md:text-5xl font-bold mb-1 ${
                                                isColored ? 'text-white' : 'text-slate-900 dark:text-white'
                                            }`}>
                                                {stat.value}
                                            </p>
                                            <p className={`text-sm font-medium ${
                                                isColored ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'
                                            }`}>
                                                {stat.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-unefa-gold to-amber-500 text-slate-900 px-5 py-3 rounded-2xl shadow-xl shadow-unefa-gold/30"
                        >
                            <div className="flex items-center gap-2">
                                <Award size={20} />
                                <span className="font-bold text-sm">Acreditado</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            Competencias que desarrollarás
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Habilidades clave para tu formación profesional
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="group relative bg-white dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    <div className="relative flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            <Icon size={26} className="text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-all">
                                                {feature.title}
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                        <ArrowRight size={18} className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-slate-400`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-3xl p-8 md:p-10 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-unefa-blue/20 to-purple-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-unefa-gold/20 to-amber-500/20 rounded-full blur-3xl" />

                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-5">
                                <div className="flex -space-x-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1, zIndex: 10 }}
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-unefa-blue to-blue-600 flex items-center justify-center text-white text-lg font-bold border-3 border-slate-900 shadow-xl cursor-pointer"
                                    >
                                        D
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, zIndex: 10 }}
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-unefa-gold to-amber-500 flex items-center justify-center text-slate-900 text-lg font-bold border-3 border-slate-900 shadow-xl cursor-pointer"
                                    >
                                        R
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, zIndex: 10 }}
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white text-lg font-bold border-3 border-slate-900 shadow-xl cursor-pointer"
                                    >
                                        +
                                    </motion.div>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">
                                        Desarrollado por estudiantes
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        Ingeniería de Sistemas - UNEFA Miranda
                                    </p>
                                </div>
                            </div>

                            <motion.a
                                href="#trabajos"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                Ver Trabajos
                                <ArrowRight size={18} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
