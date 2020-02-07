import React from "react";
import Link from "next/link";

const ContentLink = props => {
  console.log(props);
  function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
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
