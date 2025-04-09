import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.headerLogo}>NextJS Course</h1>
    </div>
  );
};
export default Header;
