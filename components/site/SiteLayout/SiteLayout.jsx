import SiteHead from "../SiteHead";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

import styles from "./SiteLayout.module.scss";

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHead />
      <div className={styles.mainContainer}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </>
  );
};

export default SiteLayout;
