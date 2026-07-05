import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

            <div className="container">

                <NavLink className="navbar-brand fw-bold" to="/">
                    @macielsilva
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">

                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="bi bi-house-fill"></i> Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/curriculo">
                                <i className="bi bi-file-earmark-person-fill"></i> Currículo
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio">
                                <i className="bi bi-code-slash"></i> Portfólio
                            </NavLink>
                        </li>

                    </ul>

                    <button className="btn btn-outline-light">
                        <i className="bi bi-moon-fill"></i>
                    </button>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;