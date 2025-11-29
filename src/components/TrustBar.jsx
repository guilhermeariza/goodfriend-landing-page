import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <section className="trust-bar container">
            <div className="trust-item">
                <span className="trust-icon shield">🛡️</span>
                <span>Instalação Segura</span>
            </div>
            <div className="trust-item">
                <span className="trust-icon clock">🕒</span>
                <span>Cancele a Qualquer Momento</span>
            </div>
            <div className="trust-item browsers">
                <div className="browser-icons">
                    {/* Simple circles to represent browser logos for now */}
                    <span className="browser-icon chrome"></span>
                    <span className="browser-icon edge"></span>
                    <span className="browser-icon firefox"></span>
                </div>
                <span>Compatível com Principais Navegadores</span>
            </div>
        </section>
    );
};

export default TrustBar;
