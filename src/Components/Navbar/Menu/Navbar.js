import CartWidget from '../../../Components/Navbar/CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

import '../Menu/Navbar.css'

const Navbar = () => {
    return (

        <div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"><img src="https://i.ibb.co/0cCgjfS/zgames-logo-chico.png" alt="zgames-logo-png"></img></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavLink to={`item/category/playstation4`}><li className='nav-item'>Playstation 4</li></NavLink>
                            <NavLink to={`item/category/playstation5`}><li className='nav-item'>Playstation 5</li></NavLink>

                            <li className="nav-link carrito">
                                <CartWidget />
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Navbar

