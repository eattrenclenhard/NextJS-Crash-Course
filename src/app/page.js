"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

const topics = [
  {
    title: "Server-side Rendering",
    description:
      "Server-side rendering (SSR) in Next.js allows for the pre-rendering of React components on the server before sending the final HTML to the client, improving performance and SEO.",
  },
  {
    title: "Static Site Generation",
    description:
      "Static site generation (SSG) in Next.js allows for the pre-rendering of React components at build time, improving performance and SEO.",
  },
  {
    title: "Incremental Static Regeneration",
    description:
      "Incremental static regeneration (ISR) in Next.js allows for the pre-rendering of React components at build time, with the ability to re-generate them at runtime when new data is available.",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log();

  return (
    <main className={styles.main}>
      <h1>NextJS Crash Course</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTerm={(input) => setSearchTerm(input)}
      />
      <div className={styles.cardContainer}>
        {filteredTopics.map((topic, index) => (
          <Card
            key={index}
            title={topic.title}
            description={topic.description}
          />
        ))}
        {/* <Card
        title="Server-side rendering"
        description="Server-side rendering (SSR) in Next.js allows for the pre-rendering of React components on the server before sending the final HTML to the client, improving performance and SEO."
      /> */}
      </div>
    </main>
  );
}
