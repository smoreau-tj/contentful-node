import { useEffect, useState } from "react";
import Head from "next/head";
import { fetchContentful } from "../lib/connect";
import LandingPage from "../components/landing";

const client = fetchContentful("production ");
const PublishedPage = props => {
  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: "landingPage",
      include: 5
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [landingPages, setLandingPages] = useState(null);
  useEffect(() => {
    async function getContent() {
      const allContent = await fetchEntries();
      setLandingPages([...allContent]);
    }
    getContent();
  }, []);
  console.log(landingPages);
  return (
    <>
      <Head>
        <title>Contentful Pages</title>
      </Head>
      <LandingPage data={landingPages} />
    </>
  );
};

export default PublishedPage;
