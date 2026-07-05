import Perfil from "../components/Perfil/Perfil";
import ConteudoSobre from "../components/ConteudoSobre/ConteudoSobre";
import Footer from "../components/Footer/Footer";

const Portfolio = () => {
    return (
        <div>

            <h1 className="fw-bold">
                Portfólio
            </h1>

            <hr />

            <div className="row">

                <div className="col-md-6">

                    <div className="card p-3 mb-3">

                        <h4>Calculadora</h4>

                        <p>
                            Projeto desenvolvido em JavaScript.
                        </p>

                    </div>

                </div>

                <div className="col-md-6">

                    <div className="card p-3 mb-3">

                        <h4>Cronômetro</h4>

                        <p>
                            Projeto desenvolvido em JavaScript.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Portfolio;