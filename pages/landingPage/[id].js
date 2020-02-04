import { useRouter } from "next/router";
import { client } from "../../lib/connect";
import Hero from "../../components/hero";
import FullWidth from "../../components/full_width";
import SidebySide from "../../components/side_by_side";
import ThreePanel from "../../components/three_panel";
import StaticHeader from "../../components/static-header";
import StaticFooter from "../../components/static-footer";

const Page = props => {
  const router = useRouter();
  // const { landingPageTitle } = props.page;
  const { id } = router.query;
  console.log(props);
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
      <StaticHeader />
      {/* <p>{landingPageTitle}</p> */}
      {props.modules
        ? console.log("this is my data", props)
        : console.log("waiting for data")}
      {props.modules && props.modules.length > 0 ? (
        props.modules.map((item, i) => {
          console.log("this is a single item", item.sys.contentType.sys.id);
          return typeToRender(
            item.sys.contentType.sys.id,
            item.sys.id,
            item.fields
          );
        })
      ) : (
        <div className="whatever">Please add a module</div>
      )}
      <StaticFooter />
    </>
  );
};

Page.getInitialProps = async ({ query }) => {
  const res = await client.getEntries({
    content_type: "landingPage",
    "sys.id": query.id,
    limit: 1,
    include: 5
  });
  console.log(query);
  return {
    page: res,
    modules: res.items[0].fields.modules
  };
};

export default Page;
