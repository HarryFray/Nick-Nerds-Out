import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Nick Nerds Out
        </Link>
        <nav className={styles.nav}>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

