import Image from "next/image";
import styles from "./SiteHeader.module.scss";

const SiteHeader = () => {
  return (
    <header className={styles.header}>
        <Image src="/assets/man.svg" alt="logo" width="100px" height="100px" />
        <h1>Maugras Services</h1>
    </header>
  );
};

export default SiteHeader;
