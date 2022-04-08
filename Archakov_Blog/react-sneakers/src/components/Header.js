import { useCart } from "../hooks/useCart";

import { Link } from "react-router-dom";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="logo" width={40} height={40} src="img/logo.png" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            alt="cart"
            width={18}
            height={18}
            src="img/cart.svg"
            className="mr-10"
          />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img alt="favorite" width={18} height={18} src="img/favorite.svg" />
          </Link>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/orders">
            <img alt="favorite" width={18} height={18} src="img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
