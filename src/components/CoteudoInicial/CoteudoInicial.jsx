import React from 'react'

const CoteudoInicial = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>

            {/* APRESENTAÇÃO */}
            <div className="mt-3">

                <h2>Apresentação</h2>

                <p>
                    Estudante de Análise e Desenvolvimento de Sistemas,
                    com foco em desenvolvimento web e tecnologias modernas.
                </p>

                <p>
                    Interesse em HTML, CSS, JavaScript, desenvolvimento de sistemas.
                </p>

                <hr />

                {/* ÁREAS DE INTERESSE */}
                <h3>Áreas de Interesse</h3>

                <div className="row mt-3">

                    <div className="col-md-6 mb-3">
                        <div className="card p-3">
                            <h5>Desenvolvimento front-end</h5>
                            <p>React, HTML, CSS, JavaScript</p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card p-3">
                            <h5>Desenvolvimento back-end</h5>
                            <p>Node.js, PHP, APIs, bancos de dados</p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card p-3">
                            <h5>Segurança da informação</h5>
                            <p>Segurança de redes, criptografia, auditoria</p>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card p-3">
                            <h5>Design Digital</h5>
                            <p> Imagem, Photoshop, design gráfico</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CoteudoInicial