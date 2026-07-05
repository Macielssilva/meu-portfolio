import React from 'react'
import { Link } from 'react-router-dom'
import fotoPerfil from './foto_200.jpeg'

const Perfil = () => {
    return (
        <div className="text-center">

            <img
                src={fotoPerfil}
                alt="perfil"
                className="rounded-circle mb-3"
                style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            />

            <h5 className="mb-3">@macielsilva</h5>

            <div className="d-flex flex-column gap-2">

            </div>

            <hr />

            <p className="small text-muted">
                maciellsilvaa0@email.com
            </p>

            <p className="small text-muted">
                Gaspar - SC
            </p>
            <a
              href="/Curriculo_Maciel.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
         >
              Baixar meu Currículo
            </a>

        </div>
    )
}

export default Perfil