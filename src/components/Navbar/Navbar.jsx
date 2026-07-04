import Perfil from "../components/Perfil/Perfil";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CoteudoInicial from "../components/CoteudoInicial/CoteudoInicial";
import ConteudoSobre from "../components/ConteudoSobre/ConteudoSobre";
import ConteudoContato from "../components/ConteudoContato/ConteudoContato";

const App = () => {
    return (
        <BrowserRouter>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-md-4 col-lg-3 border-end min-vh-100 p-3">
                        <Perfil col={12} />
                    </div>

                    <div className="col-12 col-md-8 col-lg-9 p-4">

                        <Routes>
                            <Route path="/" element={<CoteudoInicial col={12} />} />
                            <Route path="/sobre" element={<ConteudoSobre col={12} />} />
                            <Route path="/contato" element={<ConteudoContato col={12} />} />
                        </Routes>

                        <Footer />

                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
};

export default App;