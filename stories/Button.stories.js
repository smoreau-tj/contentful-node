import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/button";

storiesOf("Button", module).add("with text", () => {
  return <Button text="Click Me" href="/" />;
});
