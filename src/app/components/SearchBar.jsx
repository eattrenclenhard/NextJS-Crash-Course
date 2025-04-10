"use client"; // this is crucial for client-side components
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchTerm, onSearchTerm }) => {
  //   const [searchTerm, setSearchTerm] = useState("handsome"); // lift state up to parent component

  return (
    <div className={styles.searchBarContainer}>
      <h1>Search for Topics</h1>
      <input
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
      ></input>
    </div>
  );
};
export default SearchBar;
