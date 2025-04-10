import styles from "./BreadCrumbs.module.css";
import Link from "next/link";

const BreadCrumbs = ({ topicName }) => {
  return (
    <div className="container">
      <div className={styles.breadCrumbsContainer}>
        <Link href="/topics" className={styles.link}>
          Topics
        </Link>
        <div>{"->"}</div>
        <div>{decodeURIComponent(topicName)}</div>
      </div>
    </div>
  );
};
export default BreadCrumbs;
