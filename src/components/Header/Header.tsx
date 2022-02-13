import * as React from "react";
import Logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import CartIcon from "../../images/Cart.svg";
import Cart from "../Cart/Cart";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <header className="header">
        <NavLink exact to="/">
          <img className="logo" src={Logo} alt="logo" />
        </NavLink>
        <div className="toolbar">
          <span
            className="toolbar__cart"
            onClick={setIsModalOpen.bind(null, true)}
          >
            <img src={CartIcon} alt="cart" />
          </span>
          <span className="toolbar__icon toolbar__avatar"></span>
        </div>
      </header>
      {isModalOpen && <Cart setIsModalOpen={setIsModalOpen} />}
    </React.Fragment>
  );
};

export default Header;
