import React from 'react'
import Navbar from '../Navbar/Navbar'

const ConteudoSobre = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>

            <Navbar />

            {/* Conteúdo Sobre */}
            <div className="container mt-5">

                <h2>Sobre mim</h2>

                <p>
                    Me chamo Maciel Dos Santos Silva, sou estudante de Análise e Desenvolvimento de Sistemas
                    e estou em constante evolução na área de tecnologia.
                </p>

                <p>
                    Já tive experiência profissional em empresa do setor TI, atuando nas áreas de
                    Suporte técnico e manutenção de sistemas internos.
                    Isso me ajudou a desenvolver organização, responsabilidade e atenção aos detalhes.
                </p>

                <p>
                    Atualmente, estou focado em desenvolvimento web, estudando tecnologias como
                    HTML, CSS, JavaScript, React
                </p>

                <p>
                    Meu objetivo é me tornar um desenvolvedor full stack, criando soluções práticas,
                    eficientes e que possam impactar positivamente o dia a dia das pessoas.
                </p>

            </div>

        </div>
    )
}

export default ConteudoSobre