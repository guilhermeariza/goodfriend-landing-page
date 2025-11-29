import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing container">
            <h2 className="pricing-title">Escolha seu nível de orientação</h2>

            <div className="pricing-grid">
                {/* Card 1: Observador */}
                <div className="pricing-card glass-panel">
                    <div className="card-header">
                        <h3 className="plan-name">Observador</h3>
                        <span className="plan-type">Pessoal</span>
                        <div className="plan-icon">🔍</div>
                    </div>
                    <div className="plan-price">
                        <span className="currency">R$</span>
                        <span className="amount">0</span>
                        <span className="period">/ mês</span>
                    </div>
                    <ul className="plan-features">
                        <li>
                            <span className="check-icon">✓</span>
                            Aprendizado passivo
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            Dicas básicas
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            1 usuário
                        </li>
                    </ul>
                    <button className="btn-secondary full-width">Baixar Agora</button>
                </div>

                {/* Card 2: Guia (Popular) */}
                <div className="pricing-card glass-panel popular">
                    <div className="popular-badge">Mais Popular</div>
                    <div className="card-header">
                        <h3 className="plan-name">Guia</h3>
                        <span className="plan-type">Profissional</span>
                        <div className="plan-icon">🤖</div>
                    </div>
                    <div className="plan-price">
                        <span className="currency">R$</span>
                        <span className="amount">49</span>
                        <span className="period">/ mês</span>
                    </div>
                    <ul className="plan-features">
                        <li>
                            <span className="check-icon teal">✓</span>
                            Integração total de Frontend
                        </li>
                        <li>
                            <span className="check-icon teal">✓</span>
                            Sobreposições de orientação ativa
                        </li>
                        <li>
                            <span className="check-icon teal">✓</span>
                            Configurações personalizadas
                        </li>
                        <li>
                            <span className="check-icon teal">✓</span>
                            Suporte prioritário
                        </li>
                    </ul>
                    <button className="btn-primary full-width">Iniciar Teste Gratuito de 14 Dias</button>
                </div>

                {/* Card 3: Equipe */}
                <div className="pricing-card glass-panel">
                    <div className="card-header">
                        <h3 className="plan-name">Equipe</h3>
                        <span className="plan-type">Empresarial</span>
                        <div className="plan-icon">🔗</div>
                    </div>
                    <div className="plan-price">
                        <span className="amount-text">Sob Consulta</span>
                    </div>
                    <ul className="plan-features">
                        <li>
                            <span className="check-icon">✓</span>
                            Base de conhecimento compartilhada
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            Controles administrativos
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            API de integração
                        </li>
                    </ul>
                    <button className="btn-secondary full-width">Falar com Vendas</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
