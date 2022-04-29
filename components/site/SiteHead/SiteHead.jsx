import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Head from "next/head";

const SiteHead = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [canonical, setCanonical] = useState("");
  const siteName = "it works";

  useEffect(() => {
    if (router.asPath) {
      const page = router.asPath;

      if (page.includes("onSite")) {
        setTitle(`Sur site | ${siteName}`);
        setDescription(
          "Page de description d'une intervention sur site avec formulaire de contact."
        );
        setCanonical(`https://www.itworks${page}`);
      }

      if (page.includes("distance")) {
        setTitle(`A distance | ${siteName}`);
        setDescription(
          "Page de procédure d'une assistance à distance avec formulaire de contact."
        );
        setCanonical(`https://www.itworks${page}`);
      }
    }
  }, [router.asPath]);

  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "initial-scale=1.0, width=device-width",
          },
        ]}
      />

      <Head>{/* TODO : google tag manager / google analytics */}</Head>
    </>
  );
};

export default SiteHead;
