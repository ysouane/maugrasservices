import Troubleshooting from "../components/base/Troubleshooting";
import Contact from "../components/base/Contact";
import styles from "../styles/Start.module.scss";

export default function Start() {
  return (
    <>
      <main className={styles.container}>
        <h2>Dépannage informatique</h2>
        <p className={styles.supportInformations}>
          J&apos;interviens chez vous du lundi au vendredi
        </p>

        <Troubleshooting />
      </main>
    </>
  );
}
