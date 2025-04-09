import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Link href="/" className={styles.headerLogo}>
        NextJS Course
      </Link>
    </div>
  );
};
export default Header;
