import Troubleshooting from "../components/base/Troubleshooting";
import Contact from "../components/base/Contact";
import styles from "../styles/Start.module.scss";

export default function Start() {
  return (
    <>
      <div className={styles.container}>
        <main>
          <header>
            J&apos;interviens chez vous du lundi au vendredi
            <br />
            dans Paris et ses alentours
          </header>
          <Troubleshooting />

          <header>
            Utiliser le formulaire de contact ci dessous afin d&apos;etre recontacté
            dans les plus bref délai
          </header>
        </main>
      </div>
      <Contact />
    </>
  );
}
