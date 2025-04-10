import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ title, description }) => {
  return (
    <Link href={`/topics/${title}`} className={styles.card}>
      {/* refrain from using - or kebab case to connect classname */}
      {/* this is becoz in React, and hence NextJS, styles are modular in nature */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
    </Link>
  );
};

export default Card;
