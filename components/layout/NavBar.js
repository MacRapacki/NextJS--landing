import Image from "next/image";

import Logo from "../../images/Logo.svg";
import MenuIcon from "../../images/ic_Menu.svg";
import AngleDown from "../../images/angle-downnav.svg";

import style from "./NavBar.module.css";

import MediaQuery from "react-responsive";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <Image src={Logo} alt="logo" />

      <MediaQuery minWidth={800}>
        {(matches) =>
          matches ? (
            <ul className={style.navList}>
              <li className={style.navItem}>
                <a className={style.navLink}>Home</a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLink}>
                  Landings{" "}
                  <div className={style.navLink_icon}>
                    <Image src={AngleDown} />
                  </div>
                </a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLink}>
                  Pages{" "}
                  <div className={style.navLink_icon}>
                    <Image src={AngleDown} />
                  </div>
                </a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLink}>Docs</a>
              </li>
              <li className={style.navItem}>
                <a className={style.navLink}>Help</a>
              </li>
              <li className={style.navItem}>
                <button className={style.navButton}>Get it now</button>
              </li>
            </ul>
          ) : (
            <button className={style.burger}>
              <Image src={MenuIcon} alt="menu icon" width={24} height={24} />
            </button>
          )
        }
      </MediaQuery>
    </nav>
  );
}
