import Contact from "../../base/Contact";
import styles from "./SiteFooter.module.scss";

const SiteFooter = () => {
  return (
    <footer className={styles.siteFooter}>
      <Contact />
    </footer>
  );
};

export default SiteFooter;
