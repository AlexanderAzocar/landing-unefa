import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-unefa-blue text-white py-12 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">UNEFA</h3>
                        <p className="text-sm text-blue-100">
                            Universidad Nacional Experimental Politécnica de la Fuerza Armada Nacional Bolivariana.
                            <br />Excelencia Educativa.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">Materia</h3>
                        <p className="text-sm text-blue-100">
                            Planificación y Evaluación de Proyectos.
                            <br />8vo Semestre.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">Créditos</h3>
                        <p className="text-sm text-blue-100">
                            Desarrollado por <a href="https://github.com/D13G0ARJ" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors">Diego Rodriguez</a>
                            <br />React + Vite + Tailwind CSS.
                        </p>
                    </div>
                </div>
                <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-200">
                    <p>&copy; {currentYear} UNEFA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
