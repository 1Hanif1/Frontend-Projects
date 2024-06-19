import styles from './Navigation.module.scss';
import HamburgerIcon from "../assets/icon-hamburger.svg"
import HamburgerCloseIcon from "../assets/icon-close.svg"
import { useState } from 'react';

export function NavigationBar() {
  const handleHoverAnimation = (e, state) => {
    const allLinks = document.querySelectorAll("li")
    if(state === "enter"){
      allLinks.forEach(li => li.classList.add(styles.li__inactive))
      e.target.classList.remove(styles.li__inactive);
    }
    else allLinks.forEach(li => li.classList.remove(styles.li__inactive))
  }

  const isMobileDevice = window.matchMedia('(max-width: 800px)').matches;

  const [showNavBar, setShowNavBar] = useState(!isMobileDevice)
  return <>
    <nav className={styles.nav}>

      <div className={styles.nav__hamburger} onClick={() => setShowNavBar(true)}>
        <img src={HamburgerIcon} alt="Hamburger Icon" />
      </div>
      <h1>room</h1>

      {showNavBar && <ul id="nav-links">
    
        <div className={styles.nav__close} onClick={() => setShowNavBar(false)}>
          <img src={HamburgerCloseIcon} alt="Hamburger Icon" />
        </div>

        {
          ["home", "shop", "about", "contact"]
          .map(
            str => 
              <li 
              key={str}
              onMouseEnter={e => handleHoverAnimation(e, "enter")}
              onMouseLeave={e => handleHoverAnimation(e, "leave")}
              >
                {str}
              </li>
          )
        }
      </ul>
      }
    </nav></>;
}
