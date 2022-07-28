import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav: FC = () => {
  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.nav_link_active}` : `${styles.nav_link}`
        }
        to="/">
        Search games
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.nav_link_active}` : `${styles.nav_link}`
        }
        to="/stores">
        Stores
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.nav_link_active}` : `${styles.nav_link}`
        }
        to="/how-it-works">
        How it works
      </NavLink>
    </div>
  );
};

export default Nav;
