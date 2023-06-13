import Image from "next/image";
import styles from "./page.module.css";
import HomeScreen from "./pages/Home";
export default function Home() {
  return (
    <main className={styles.main}>
      <HomeScreen />
    </main>
  );
}
