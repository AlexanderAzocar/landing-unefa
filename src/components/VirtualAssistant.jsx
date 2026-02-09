import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, BookOpen, Scale, Calendar } from 'lucide-react';

const quickResponses = [
    {
        id: 'apuntes',
        label: 'Ver Apuntes',
        icon: BookOpen,
        response: 'Los apuntes del curso están organizados en dos unidades principales:\n\n• **Unidad 8:** La Empresa como Proyecto (Justificación, Administración, Aspectos Legales)\n\n• **Unidad 9:** Aspectos Institucionales (Relaciones interproyectos, Sector Gubernamental)\n\nPuedes explorar cada tema haciendo clic en las secciones de arriba.'
    },
    {
        id: 'normativa',
        label: 'Normativa',
        icon: Scale,
        response: 'El marco legal de Defensa Integral incluye:\n\n• **CRBV:** Artículos 322-328 sobre seguridad nacional\n• **LOFANB:** Organización de la Fuerza Armada\n• **LOSN:** Ley Orgánica de Seguridad de la Nación\n• **Plan de la Patria:** Objetivos estratégicos nacionales\n\nConsulta la sección "Marco Legal" para ver los artículos clave.'
    },
    {
        id: 'cronograma',
        label: 'Cronograma',
        icon: Calendar,
        response: 'El curso se evalúa en tres cortes:\n\n• **Corte 1 (30%):** Análisis de viabilidad y plan de negocios\n• **Corte 2 (30%):** Marco legal e impacto social\n• **Proyecto Final (40%):** Integración de todos los aspectos\n\nRevisa la sección "Trabajos" para ver las asignaciones de cada corte.'
    }
];

function VirtualAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 'welcome',
            type: 'bot',
            content: '¡Saludos! Soy el Asistente de Defensa Integral. ¿Necesitas ayuda con las evaluaciones o la normativa?',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleQuickResponse = (quick) => {
        // Add user message
        const userMessage = {
            id: `user-${Date.now()}`,
            type: 'user',
            content: quick.label,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);

        // Simulate typing
        setIsTyping(true);
        setTimeout(() => {
            const botMessage = {
                id: `bot-${Date.now()}`,
                type: 'bot',
                content: quick.response,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const formatContent = (content) => {
        // Simple markdown bold parsing
        return content.split('\n').map((line, idx) => (
            <span key={idx} className="block" dangerouslySetInnerHTML={{
                __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} />
        ));
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-unefa-blue dark:bg-unefa-gold rounded-full shadow-lg flex items-center justify-center text-white dark:text-slate-900 ${isOpen ? 'hidden' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                aria-label="Abrir asistente virtual"
            >
                <MessageCircle size={24} />
                {/* Pulse Animation */}
                <span className="absolute inset-0 rounded-full bg-unefa-blue dark:bg-unefa-gold animate-ping opacity-30" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-unefa-blue px-4 py-3 flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">Asistente UNEFA</h3>
                                    <p className="text-xs text-blue-200">Defensa Integral</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                                aria-label="Cerrar chat"
                            >
                                <X size={18} className="text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[40vh]">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {message.type === 'bot' && (
                                        <div className="flex-shrink-0 w-7 h-7 bg-unefa-blue/10 dark:bg-unefa-gold/10 rounded-full flex items-center justify-center">
                                            <Bot size={14} className="text-unefa-blue dark:text-unefa-gold" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                                            message.type === 'user'
                                                ? 'bg-unefa-blue text-white rounded-br-md'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-md'
                                        }`}
                                    >
                                        {formatContent(message.content)}
                                    </div>
                                    {message.type === 'user' && (
                                        <div className="flex-shrink-0 w-7 h-7 bg-unefa-gold/20 rounded-full flex items-center justify-center">
                                            <User size={14} className="text-unefa-gold" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-2 items-center"
                                >
                                    <div className="w-7 h-7 bg-unefa-blue/10 dark:bg-unefa-gold/10 rounded-full flex items-center justify-center">
                                        <Bot size={14} className="text-unefa-blue dark:text-unefa-gold" />
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-2xl rounded-bl-md">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Quick Responses */}
                        <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex-shrink-0">
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Respuestas rápidas:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickResponses.map((quick) => {
                                    const Icon = quick.icon;
                                    return (
                                        <motion.button
                                            key={quick.id}
                                            onClick={() => handleQuickResponse(quick)}
                                            disabled={isTyping}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-unefa-blue/10 dark:hover:bg-unefa-gold/10 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-600 hover:border-unefa-blue/50 dark:hover:border-unefa-gold/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Icon size={12} />
                                            {quick.label}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Input Area (decorative) */}
                        <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Selecciona una opción arriba..."
                                    disabled
                                    className="flex-1 px-3 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm text-slate-400 placeholder-slate-400 cursor-not-allowed"
                                />
                                <button
                                    disabled
                                    className="p-2 bg-slate-200 dark:bg-slate-600 rounded-xl text-slate-400 cursor-not-allowed"
                                    aria-label="Enviar mensaje"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default VirtualAssistant;
