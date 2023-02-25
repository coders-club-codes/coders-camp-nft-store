import Search from '../../assets/icons/Search';
import Lock from '../../assets/icons/Lock';
import Hamburger from '../../assets/icons/Hamburger';
import styles from './styles.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.menuContainer}>
        <div className={styles.logo}>
          Club
        </div>

        <li>
          <span>Art</span>
          <span>/</span>
        </li>
        <li>
          <span>Community</span>
          <span>/</span>
        </li>
        <li>
          <span>Magazine</span>
          <span>/</span>
        </li>
        <li>
          <span>Shop</span>
        </li>
      </ul>

      <ul className={styles.userInfoContainer}>
        <li>
            <Search />
        </li>
        <li className={styles.authContainer}>
          <Lock />
          <span>Sign In</span>
        </li>
        <li className={styles.hamburgerContainer}>
          <Hamburger />
        </li>
      </ul>
    </div>
  )
}