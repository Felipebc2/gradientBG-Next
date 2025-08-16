import Hero from "./components/hero";
import Page from "./components/Page";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <Hero />
        <Page />
        <Page />
      </main>
  );
}