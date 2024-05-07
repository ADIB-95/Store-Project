import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">AdibShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Adib 👀</p>
      </footer>
    </>
  );
}

export default Layout;
