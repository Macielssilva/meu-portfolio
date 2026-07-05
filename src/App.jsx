import Perfil from "./components/Perfil/Perfil";
import ConteudoContato from "./components/ConteudoContato/ConteudoContato";
import CoteudoInicial from "./components/CoteudoInicial/CoteudoInicial";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
     <>
      <Navbar />

      <div className="container-fluid">
        ...
      </div>
    </>            

            <h1 className="fw-bold">Bem-vindo!</h1>

            <p className="lead">
                Olá! Eu sou Maciel Silva.
            </p>

            <p>
                Este é meu portfólio desenvolvido em React.
            </p>

        </div>
    );
};

export default Home;