import styles from "./Sidebar.module.css";
import AppNav from "./AppNav.jsx";
import Logo from "./Logo.jsx";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright {new Date().getFullYear()} by WorldWise.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
