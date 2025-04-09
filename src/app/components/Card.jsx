import styles from "./Card.module.css";

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      {/* refrain from using - or kebab case to connect classname */}
      {/* this is becoz in React, and hence NextJS, styles are modular in nature */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
    </div>
  );
};

export default Card;
