import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ArrowRight, Briefcase, Calendar, Tag } from 'lucide-react';
import PropTypes from 'prop-types';
import { assignments } from '../data/content';

const categories = ["Todos", "Corte 1", "Corte 2", "Proyectos"];

function WorkCard({ assignment, index }) {
    const hasImage = Boolean(assignment.previewImage);

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-unefa-blue/30 dark:hover:border-unefa-gold/30 transition-all duration-300"
        >
            {/* Clickable Image Area */}
            <Link to={`/trabajo/${assignment.id}`} className="block">
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-unefa-blue to-unefa-blue/70">
                    {hasImage ? (
                        <img
                            src={assignment.previewImage}
                            alt={`Vista previa de ${assignment.title}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-unefa-blue via-unefa-blue/80 to-unefa-gold/60">
                            <FileText size={56} className="text-white/40" />
                        </div>
                    )}
                    {/* Category Badge Overlay */}
                    <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-xs font-semibold rounded-full text-unefa-blue dark:text-unefa-gold shadow-sm">
                            <Tag size={12} />
                            {assignment.category}
                        </span>
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">
                {/* Title - Clickable */}
                <Link to={`/trabajo/${assignment.id}`}>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-unefa-blue dark:group-hover:text-unefa-gold transition-colors">
                        {assignment.title}
                    </h3>
                </Link>

                {/* Description - Always Visible */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {assignment.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        2024
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <FileText size={14} />
                        PDF
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <Link
                        to={`/trabajo/${assignment.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-unefa-blue dark:bg-unefa-gold text-white dark:text-slate-900 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        <span>Ver Detalles</span>
                        <ArrowRight size={16} />
                    </Link>
                    <motion.a
                        href={assignment.documentUrl}
                        className="inline-flex items-center justify-center p-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl hover:border-unefa-blue hover:text-unefa-blue dark:hover:border-unefa-gold dark:hover:text-unefa-gold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Descargar PDF"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Download size={18} />
                    </motion.a>
                </div>
            </div>
        </motion.article>
    );
}

WorkCard.propTypes = {
    assignment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        previewImage: PropTypes.string,
        documentUrl: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

function WorksSection() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredAssignments = activeCategory === "Todos"
        ? assignments
        : assignments.filter(a => a.category === activeCategory);

    return (
        <section
            id="trabajos"
            className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
        >
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23003399' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-unefa-blue/10 dark:bg-unefa-gold/15 border border-unefa-blue/20 dark:border-unefa-gold/20 rounded-full mb-5">
                        <Briefcase size={16} className="text-unefa-blue dark:text-unefa-gold" />
                        <span className="text-sm font-medium text-unefa-blue dark:text-unefa-gold">
                            Portafolio Académico
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Trabajos y Asignaciones
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Colección de trabajos académicos desarrollados durante el curso de Defensa Integral,
                        organizados por corte evaluativo para fácil acceso.
                    </p>
                </motion.div>

                {/* Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    role="tablist"
                    aria-label="Filtrar trabajos por categoría"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-unefa-blue dark:focus-visible:ring-unefa-gold focus-visible:ring-offset-2
                                ${activeCategory === category
                                    ? 'bg-unefa-blue dark:bg-unefa-gold text-white dark:text-slate-900 shadow-md'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-unefa-blue/50 dark:hover:border-unefa-gold/50 hover:text-unefa-blue dark:hover:text-unefa-gold'}
                            `}
                            role="tab"
                            aria-selected={activeCategory === category}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Works Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAssignments.map((assignment, index) => (
                            <WorkCard
                                key={assignment.id}
                                assignment={assignment}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                <AnimatePresence>
                    {filteredAssignments.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <FileText size={32} className="text-slate-400 dark:text-slate-600" />
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">
                                No hay trabajos en esta categoría todavía.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default WorksSection;
