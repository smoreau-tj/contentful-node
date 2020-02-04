import React from "react";
import Link from "next/link";

const ContentLink = props => {
  console.log(props);

  return (
    <>
      <li>
        <Link href="/landingPage/[id]" as={`/landingPage/${props.id}`}>
          <a>{props.slug}</a>
        </Link>
      </li>
    </>
  );
};

export default ContentLink;
