import Perfil from "../components/Perfil/Perfil";
import Footer from "../components/Footer/Footer";
import ConteudoSobre from "../components/ConteudoSobre/ConteudoSobre";

const Sobre = () => {
    return (
        <div className="container mt-4">

            <div className="row">
                <Perfil col={4} />
                <ConteudoSobre col={8} />
            </div>

            <Footer />

        </div>
    );
};

export default Sobre;