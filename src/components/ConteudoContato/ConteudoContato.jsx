const ConteudoContato = () => {
    return (
        <div className="list-group mt-4">

            <a
                href="mailto:seuemail@email.com"
                className="list-group-item list-group-item-action"
            >
                <i className="bi bi-envelope-fill me-2"></i>
                maciellsilva@email.com
            </a>

            <div className="list-group-item">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Gaspar - SC
            </div>

            <a
                href="https://www.linkedin.com/in/macielsilva"
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
            >
                <i className="bi bi-linkedin me-2"></i>
                LinkedIn
            </a>

            <a
                href="https://github.com/Macielssilva"
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
            >
                <i className="bi bi-github me-2"></i>
                GitHub
            </a>

            <a
                href="https://instagram.com/eimaciell"
                target="_blank"
                rel="noreferrer"
                className="list-group-item list-group-item-action"
            >
                <i className="bi bi-instagram me-2"></i>
                Instagram
            </a>

        </div>
    )
}

export default ConteudoContato