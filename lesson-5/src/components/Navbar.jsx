import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="header__card">
            <span className="header__card__indicator">5</span>
            <FaShoppingCart />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
