import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    Download,
    Calendar,
    Users,
    Award,
    FileText,
    CheckCircle,
    ClipboardList,
    BookOpen,
    Tag,
    AlertCircle,
    Share2,
    ChevronRight,
    Target,
    GraduationCap,
    Moon,
    Sun,
    Home,
    Sparkles,
    Clock,
    ArrowRight,
    Layers,
    Star
} from 'lucide-react';
import { assignments } from '../data/content';
import VirtualAssistant from '../components/VirtualAssistant';
import Footer from '../components/Footer';

function ProjectDetail() {
    const { id } = useParams();
    const project = assignments.find(a => a.id === id);
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            setIsScrolled(window.scrollY > 100);
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

    // Get related projects (same category, excluding current)
    const relatedProjects = project
        ? assignments.filter(a => a.category === project.category && a.id !== project.id).slice(0, 3)
        : [];

    // Project not found
    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-md"
                >
                    <div className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-2xl shadow-red-500/30">
                        <AlertCircle size={56} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Trabajo no encontrado
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                        El trabajo que buscas no existe o ha sido eliminado del sistema.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-unefa-blue to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-unefa-blue/30 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Volver al Inicio
                    </Link>
                </motion.div>
            </div>
        );
    }

    const { fullContent } = project;
    const hasImage = Boolean(project.previewImage);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-VE', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: project.title,
                    text: project.description,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    const stats = [
        { icon: Calendar, label: 'Entrega', value: formatDate(fullContent.deliverables.dueDate), color: 'blue' },
        { icon: Award, label: 'Porcentaje', value: `${fullContent.deliverables.gradePercentage}%`, color: 'gold' },
        { icon: Users, label: 'Modalidad', value: fullContent.deliverables.teamSize, color: 'purple' },
        { icon: FileText, label: 'Formato', value: fullContent.deliverables.format, color: 'emerald' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Floating Navigation Bar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl border-b border-slate-200/50 dark:border-slate-700/50'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Left Section */}
                        <div className="flex items-center gap-4">
                            

                            <div className="hidden md:flex items-center gap-3 px-2 py-1">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-unefa-blue to-blue-600 flex items-center justify-center shadow-md">
                                    <GraduationCap size={18} className="text-white" />
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">UNEFA</span>
                                    <span className="text-[11px] uppercase text-slate-500 dark:text-slate-400 tracking-wider">Altos Mirandinos</span>
                                </div>
                            </div>
                        </div>

                        {/* Center - Project Title (on scroll) */}
                        <AnimatePresence>
                            {isScrolled && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="hidden lg:flex items-center gap-3 max-w-md"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-unefa-gold flex items-center justify-center">
                                        <Tag size={14} className="text-slate-900" />
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white truncate">
                                        {project.title}
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            <motion.button
                                onClick={handleShare}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-2.5 rounded-xl transition-all ${
                                    isScrolled
                                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                        : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                                }`}
                            >
                                <Share2 size={18} />
                            </motion.button>

                            <motion.a
                                href={project.documentUrl}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                                    isScrolled
                                        ? 'bg-gradient-to-r from-unefa-blue to-blue-600 text-white shadow-lg shadow-unefa-blue/25'
                                        : 'bg-white text-slate-900 shadow-xl'
                                }`}
                            >
                                <Download size={16} />
                                <span className="hidden sm:inline">Descargar</span>
                            </motion.a>

                            <motion.button
                                onClick={toggleTheme}
                                whileHover={{ scale: 1.05, rotate: 15 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-2.5 rounded-xl transition-all ${
                                    isScrolled
                                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                                }`}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <header className="relative min-h-[85vh] flex items-end overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    {hasImage ? (
                        <>
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src={project.previewImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
                        </>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-unefa-blue via-blue-600 to-slate-900">
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            }} />
                            {/* Decorative Blurs */}
                            <motion.div
                                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 right-1/4 w-96 h-96 bg-unefa-gold/30 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent" />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="relative w-full pb-12 pt-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 text-sm text-white/60 mb-8"
                        >
                            <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
                                <Home size={14} />
                                Inicio
                            </Link>
                            <ChevronRight size={14} />
                            <Link to="/#trabajos" className="hover:text-white transition-colors">
                                Trabajos
                            </Link>
                            <ChevronRight size={14} />
                            <span className="text-white font-medium">{project.category}</span>
                        </motion.nav>

                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center gap-3 mb-8"
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-unefa-gold to-amber-500 text-slate-900 text-sm font-bold rounded-full shadow-xl shadow-unefa-gold/30">
                                <Sparkles size={16} />
                                {project.category}
                            </span>
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/20">
                                <Award size={16} />
                                {fullContent.deliverables.gradePercentage}% de la nota
                            </span>
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/20">
                                <Clock size={16} />
                                {formatDate(fullContent.deliverables.dueDate)}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-5xl"
                        >
                            {project.title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl font-light"
                        >
                            {project.description}
                        </motion.p>

                        {/* Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 mt-10"
                        >
                            <motion.a
                                href={project.documentUrl}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all"
                            >
                                <Download size={22} />
                                Descargar Documento
                            </motion.a>
                            <motion.a
                                href="#contenido"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                            >
                                Ver Contenido
                                <ArrowRight size={20} />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </header>

            {/* Stats Section */}
            <section className="relative mt-6 z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                const isLast = idx === stats.length - 1;
                                return (
                                    <div
                                        key={stat.label}
                                        className={`p-6 md:p-8 text-center ${!isLast ? 'border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700' : 'border-b md:border-b-0'} ${idx === 2 ? 'md:border-r' : ''}`}
                                    >
                                        <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                                            stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                            stat.color === 'gold' ? 'bg-amber-100 dark:bg-amber-900/30' :
                                            stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                            'bg-emerald-100 dark:bg-emerald-900/30'
                                        }`}>
                                            <Icon size={26} className={
                                                stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                                stat.color === 'gold' ? 'text-amber-600 dark:text-amber-400' :
                                                stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                                'text-emerald-600 dark:text-emerald-400'
                                            } />
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">
                                            {stat.label}
                                        </p>
                                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                                            {stat.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main id="contenido" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Introduction */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-gradient-to-br from-unefa-blue to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-unefa-blue/25">
                                    <BookOpen size={26} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        Introducción
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        Contexto y fundamentos del trabajo
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-lg">
                                {fullContent.introduction.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.section>

                        {/* Objectives */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/25">
                                    <Target size={26} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        Objetivos
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        {fullContent.objectives.length} objetivos a cumplir
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {fullContent.objectives.map((objective, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ x: 8 }}
                                        className="flex items-start gap-5 p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all group cursor-default"
                                    >
                                        <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <CheckCircle size={20} className="text-white" />
                                        </span>
                                        <span className="text-slate-700 dark:text-slate-300 text-lg pt-1.5">
                                            {objective}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Requirements */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/25">
                                    <ClipboardList size={26} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                                        Requerimientos
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400">
                                        Lo que debe contener el trabajo
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-slate-50 dark:from-purple-900/20 dark:via-violet-900/10 dark:to-slate-800 rounded-3xl p-8 md:p-10 border border-purple-200 dark:border-purple-900/30">
                                <div className="space-y-5">
                                    {fullContent.requirements.map((req, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.08 }}
                                            className="flex items-start gap-5"
                                        >
                                            <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-slate-700 dark:text-slate-300 text-lg pt-1.5">
                                                {req}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <motion.aside
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-28 space-y-8">
                            {/* Download Card */}
                            <div className="bg-gradient-to-br from-unefa-blue via-blue-600 to-blue-700 rounded-3xl p-8 text-white overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-unefa-gold/20 rounded-full blur-2xl" />
                                <div className="relative">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                                        <FileText size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Descarga el documento</h3>
                                    <p className="text-white/80 mb-6">
                                        Obtén el archivo PDF con toda la información del trabajo.
                                    </p>
                                    <motion.a
                                        href={project.documentUrl}
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-unefa-blue font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        <Download size={22} />
                                        Descargar PDF
                                    </motion.a>
                                </div>
                            </div>

                            {/* Technical Details */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                    <div className="flex items-center gap-3">
                                        <Layers size={20} className="text-unefa-blue dark:text-unefa-gold" />
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                                            Ficha Técnica
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6 space-y-5">
                                    {stats.map((stat) => {
                                        const Icon = stat.icon;
                                        return (
                                            <div key={stat.label} className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                                    stat.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                                    stat.color === 'gold' ? 'bg-amber-100 dark:bg-amber-900/30' :
                                                    stat.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                                    'bg-emerald-100 dark:bg-emerald-900/30'
                                                }`}>
                                                    <Icon size={22} className={
                                                        stat.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                                        stat.color === 'gold' ? 'text-amber-600 dark:text-amber-400' :
                                                        stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                                                        'text-emerald-600 dark:text-emerald-400'
                                                    } />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
                                                        {stat.label}
                                                    </p>
                                                    <p className="text-base font-bold text-slate-900 dark:text-white">
                                                        {stat.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Related Projects */}
                            {relatedProjects.length > 0 && (
                                <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                                    <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                        <div className="flex items-center gap-3">
                                            <Star size={20} className="text-unefa-gold" />
                                            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                                                Trabajos Relacionados
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        {relatedProjects.map((related) => (
                                            <Link
                                                key={related.id}
                                                to={`/trabajo/${related.id}`}
                                                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all group"
                                            >
                                                <div className="w-12 h-12 bg-gradient-to-br from-unefa-blue/10 to-purple-500/10 dark:from-unefa-gold/10 dark:to-amber-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <FileText size={20} className="text-unefa-blue dark:text-unefa-gold" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-semibold text-slate-900 dark:text-white truncate group-hover:text-unefa-blue dark:group-hover:text-unefa-gold transition-colors">
                                                        {related.title}
                                                    </p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                                        {related.category}
                                                    </p>
                                                </div>
                                                <ArrowRight size={18} className="text-slate-400 group-hover:text-unefa-blue dark:group-hover:text-unefa-gold group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Back Button */}
                            <Link
                                to="/#trabajos"
                                className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                            >
                                <ArrowLeft size={20} />
                                Volver a Trabajos
                            </Link>
                        </div>
                    </motion.aside>
                </div>
            </main>

            <Footer />

            {/* Virtual Assistant Chat */}
            <VirtualAssistant />
        </div>
    );
}

export default ProjectDetail;
