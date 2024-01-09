import { NavLink, Link } from 'react-router-dom'
import styles from './AppNav.module.scss'

function AppNav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/">Caratunk Contractors</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
