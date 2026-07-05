import React from 'react'

const CoteudoInicial = () => {
    return (
        <div>

            {/* HEADER */}
            <h2 className="mb-3">Apresentação</h2>

            <p>
               Estudante de Análise e Desenvolvimento de Sistemas no IFSC e atuo como Analista de Suporte de TI. Tenho experiência 
               em suporte técnico, atendimento ao usuário, gerenciamento de acessos, configuração de sistemas, SAP, VPN e
               administração de impressoras. Possuo conhecimentos em Banco de Dados, SQL, HTML, CSS, JavaScript, C# e C, 
               além de buscar constante aprendizado para desenvolver soluções eficientes e evoluir profissionalmente na 
               área de tecnologia.
            </p>

            <hr />

            {/* CARDS */}
            <h4>Áreas de Interesse</h4>

            <div className="row mt-3 g-3">

                <div className="col-md-6">
                    <div className="card p-3 h-100 shadow-sm">
                        <h6>Front-end</h6>
                        <small>React, HTML, CSS, JS</small>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-3 h-100 shadow-sm">
                        <h6>Back-end</h6>
                        <small>Node.js, APIs, SQL</small>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-3 h-100 shadow-sm">
                        <h6>Segurança da Informação</h6>
                        <small>Firewalls, Criptografia</small>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-3 h-100 shadow-sm">
                        <h6>Design Gráfico</h6>
                        <small>Photoshop, Illustrator</small>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CoteudoInicial