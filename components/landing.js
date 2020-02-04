import React from "react";
import Hero from "../components/hero";
import FullWidth from "../components/full_width";
import SidebySide from "../components/side_by_side";
import ThreePanel from "../components/three_panel";

const LandingPage = ({ data }) => {
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
      {data
        ? console.log("this is my data", data[0].fields.modules)
        : console.log("waiting for data")}
      {data ? (
        data[0].fields.modules.map((item, i) => {
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
    </>
  );
};

export default LandingPage;
