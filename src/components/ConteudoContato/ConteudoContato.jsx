import React from 'react'
import Navbar from '../Navbar/Navbar'

const ConteudoContato = ({ col }) => {
    return (
        <div className={`col-12 col-md-${col}`}>

            <Navbar />

            {/* Conteúdo Contato */}
            <div className="container mt-5">

                <h2>Contato</h2>

                <p>
                    Se quiser entrar em contato comigo, fique à vontade!
                </p>

                <div className="mt-4">

                    <p>
                        Email: maciellsilvaao@email.com
                    </p>

                    <p>
                        Telefone: (47) 992913789
                    </p>

                    <p>
                        LinkedIn: linkedin.com/in/maciel
                    </p>

                    <p>
                        GitHub: github.com/Macielssilva
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ConteudoContato