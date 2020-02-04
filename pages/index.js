import { useEffect, useState } from "react";
import Head from "next/head";
import { client } from "../lib/connect";
import ContentLink from "../components/links";
import LandingPage from "../components/landing";

const Index = () => {
  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: "landingPage",
      include: 5
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [landingPages, setLandingPages] = useState([]);
  useEffect(() => {
    async function getContent() {
      const allContent = await fetchEntries();
      setLandingPages([...allContent]);
    }
    getContent();
  }, []);
  console.log("This is from my index file", landingPages);
  return (
    <>
      <Head>
        <title>Contentful Pages</title>
      </Head>
      <p> Sample App using React and Next.js</p>
      {landingPages.length > 0
        ? landingPages.map(lp => (
            <ContentLink
              key={lp.sys.id}
              title={lp.fields.landingPageTitle}
              contentType={lp.sys.contentType.sys.id}
              id={lp.sys.id}
              slug={lp.fields.slug}
            />
          ))
        : null}
    </>
  );
};

export default Index;
