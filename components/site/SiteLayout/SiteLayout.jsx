import SiteHead from "../SiteHead";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHead />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default SiteLayout;
