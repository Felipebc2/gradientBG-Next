import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <header className={styles.header}>
            <h1>Gradient BG</h1>
        </header>
      <main className={styles.main}>
        <h3>Color #1</h3>
      </main>
    </div>
  );
}
