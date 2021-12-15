import CartWidget from '../../../Components/Navbar/CartWidget/CartWidget'

import '../Menu/Navbar.css'

const Navbar = () => {
    return(

        <div>

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img src="https://i.ibb.co/0cCgjfS/zgames-logo-chico.png" alt="zgames-logo-png"></img></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">

                            <li className="nav-link dropdown-toggle nav-edit" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</li>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <li><a className="dropdown-item" href="index.html">Playstation 4</a></li>
                                <li><a className="dropdown-item" href="index.html">Playstation 5</a></li>

                            </ul>

                        </li>
                        <li className="nav-link carrito">
                        <CartWidget/>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>

        </div>

    )
}

export default Navbar

