import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Shield, BookOpen, Landmark, ChevronRight, X, FileText } from 'lucide-react';
import PropTypes from 'prop-types';
import { legalDocuments } from '../data/content';

const iconMap = {
    scale: Scale,
    shield: Shield,
    book: BookOpen,
    landmark: Landmark,
};

function ArticlesModal({ document, onClose }) {
    const Icon = iconMap[document.icon] || FileText;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-unefa-blue px-6 py-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                <Icon size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{document.shortTitle}</h3>
                                <p className="text-xs text-blue-200">Artículos Clave</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={20} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                        {document.description}
                    </p>
                    <div className="space-y-3">
                        {document.keyArticles.map((article, index) => (
                            <motion.div
                                key={article.number}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-unefa-blue/10 dark:bg-unefa-gold/10 rounded-xl flex items-center justify-center">
                                    <span className="text-sm font-bold text-unefa-blue dark:text-unefa-gold text-center leading-tight">
                                        Art.<br />{article.number}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {article.summary}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-700/30 border-t border-slate-200 dark:border-slate-700">
                    <a
                        href={document.documentUrl}
                        className="inline-flex items-center gap-2 text-sm font-medium text-unefa-blue dark:text-unefa-gold hover:underline"
                    >
                        <FileText size={16} />
                        Ver documento completo
                        <ChevronRight size={16} />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

ArticlesModal.propTypes = {
    document: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        shortTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        keyArticles: PropTypes.arrayOf(PropTypes.shape({
            number: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
        })).isRequired,
        documentUrl: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

function LegalCard({ document, onViewArticles }) {
    const Icon = iconMap[document.icon] || FileText;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:border-unefa-blue/50 dark:hover:border-unefa-gold/50 hover:shadow-lg transition-all duration-300"
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-unefa-blue/10 dark:bg-unefa-gold/10 rounded-xl flex items-center justify-center group-hover:bg-unefa-blue dark:group-hover:bg-unefa-gold transition-colors duration-300">
                    <Icon
                        size={24}
                        className="text-unefa-blue dark:text-unefa-gold group-hover:text-white transition-colors duration-300"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 line-clamp-2">
                        {document.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
                        {document.description}
                    </p>
                    <motion.button
                        onClick={() => onViewArticles(document)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-unefa-blue dark:text-unefa-gold hover:underline"
                        whileHover={{ x: 3 }}
                    >
                        Artículos Clave
                        <ChevronRight size={14} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

LegalCard.propTypes = {
    document: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        shortTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        keyArticles: PropTypes.array.isRequired,
        documentUrl: PropTypes.string.isRequired,
    }).isRequired,
    onViewArticles: PropTypes.func.isRequired,
};

function LegalSection() {
    const [selectedDocument, setSelectedDocument] = useState(null);

    return (
        <>
            <section
                id="marco-legal"
                className="relative py-16 md:py-20 bg-white dark:bg-slate-900"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-unefa-blue/10 dark:bg-unefa-gold/15 border border-unefa-blue/20 dark:border-unefa-gold/20 rounded-full mb-4">
                            <Scale size={16} className="text-unefa-blue dark:text-unefa-gold" />
                            <span className="text-sm font-medium text-unefa-blue dark:text-unefa-gold">
                                Fundamento Jurídico
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            Marco Legal de Referencia
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Documentos legales fundamentales que sustentan la Defensa Integral
                            y la planificación estratégica en Venezuela.
                        </p>
                    </motion.div>

                    {/* Legal Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {legalDocuments.map((doc) => (
                            <LegalCard
                                key={doc.id}
                                document={doc}
                                onViewArticles={setSelectedDocument}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedDocument && (
                    <ArticlesModal
                        document={selectedDocument}
                        onClose={() => setSelectedDocument(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default LegalSection;
