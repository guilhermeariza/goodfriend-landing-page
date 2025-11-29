import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Torne qualquer <br />
                    software amigável.
                </h1>
                <p className="hero-subtitle">
                    O companheiro de IA que aprende seus fluxos de trabalho
                    e o guia em tarefas complexas. Instale em segundos.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">
                        Baixar Grátis (Uso Pessoal)
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="btn-secondary">
                        Ver Planos Empresariais
                    </button>
                </div>
            </div>
            <div className="hero-image">
                {/* Placeholder for 3D Robot Image */}
                <div className="robot-placeholder">
                    <img src="/robot_placeholder.png" alt="Goodfriend Robot" className="robot-img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
