import Image from "next/image";
import Link from "next/link";
import styles from "./SiteHeader.module.scss";

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/assets/man.svg" alt="logo" width="100px" height="100px" />
        <h1>It works</h1>
      </div>

      <div className={styles.description}>
        <h2>
          Depannage informatique pour les particuliers
        </h2>
      </div>
    </header>
  );
};

export default SiteHeader;
