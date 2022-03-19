function Header (props){
	return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img alt="logo" width={40} height={40} src="/img/logo.png" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            alt="cart"
            width={18}
            height={18}
            src="/img/cart.svg"
            className="mr-10"
          />
          <span>1 205 руб.</span>
        </li>
        <li className="mr-30">
          <img alt="favorite" width={18} height={18} src="/img/favorite.svg" />
        </li>
        <li>
          <img alt="user" width={18} height={18} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;