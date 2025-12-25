"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <header className={styles.container} id="header">
      <div className={styles.logoContainer}>
        <h1 className={styles.title}>
          <span>IR</span>.DEV
        </h1>
      </div>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.navContainer}>
          <li className={styles.btn}>
            <Link href="#header" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.btn}>
            <Link href="#projetos" onClick={closeMenu}>
              Projetos
            </Link>
          </li>
          <li className={styles.btn}>
            <Link href="#about" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
