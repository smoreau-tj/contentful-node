import React, { useState, useEffect } from "react";
import { client } from "../lib/contentful";
import Hero from "../components/hero";
import FullWidth from "../components/full_width";
import SidebySide from "../components/side_by_side";
import ThreePanel from "../components/three_panel";

const Sample = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await client.getEntries({
      content_type: "landingPage",
      include: 5
    });
    console.log("Data to be found", response);
    setData(response.items[0].fields);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const typeToRender = (type, key, data) => {
    switch (type) {
      case "heroModule":
        return <Hero info={data} key={key} class="heroModule" />;
        break;
      case "fullWidthBanner":
        return <FullWidth info={data} key={key} />;
        break;
      case "threePannel":
        return <ThreePanel info={data} key={key} />;
        break;
      case "sideBySide":
        return <SidebySide info={data} key={key} />;
        break;
      default:
        console.log("no Match Found");
    }
  };

  return (
    <>
      <main>
        {data
          ? console.log("this is my data", data)
          : console.log("waiting for data")}
        {data ? (
          data.modules.map((item, i) => {
            console.log("this is a single item", item.sys.contentType.sys.id);
            return typeToRender(
              item.sys.contentType.sys.id,
              item.sys.id,
              item.fields
            );
          })
        ) : (
          <div className="whatever">wait for it</div>
        )}
      </main>
    </>
  );
};

export default Sample;
