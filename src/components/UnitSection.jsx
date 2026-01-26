import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const AccordionItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="mb-4 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                onClick={onClick}
            >
                <div className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 ${isOpen ? 'text-unefa-blue dark:text-unefa-gold' : 'text-slate-400'}`} />
                    <span className="font-bold text-lg text-slate-800 dark:text-slate-100">{item.title}</span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="px-6 py-4 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
                    {item.content.split('\n').map((line, idx) => (
                        <p key={idx} className="mb-2" dangerouslySetInnerHTML={{
                            // Simple bold parsing for **text**
                            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}></p>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const UnitSection = ({ id, title, description, topics, isRightAligned }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id={id} className={`py-20 md:py-32 transition-colors duration-300 ${isRightAligned ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-900'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col md:flex-row gap-12 items-start ${isRightAligned ? 'md:flex-row-reverse' : ''}`}>

                    {/* Title & Description Column */}
                    <motion.div
                        className="w-full md:w-1/3 sticky top-24"
                        initial={{ opacity: 0, x: isRightAligned ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl ${isRightAligned ? 'bg-unefa-red' : 'bg-unefa-blue'} text-white shadow-lg`}>
                            <BookOpen size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {title}
                        </h2>
                        <div className={`h-1 w-20 ${isRightAligned ? 'bg-unefa-red' : 'bg-unefa-blue'} rounded-full mb-6`}></div>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            A continuación se detallan los puntos clave de esta unidad. Haz clic en cada tema para expandir la información.
                        </p>
                    </motion.div>

                    {/* Accordion Column */}
                    <motion.div
                        className="w-full md:w-2/3"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {topics.map((topic, index) => (
                            <AccordionItem
                                key={topic.id}
                                item={topic}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            />
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default UnitSection;
