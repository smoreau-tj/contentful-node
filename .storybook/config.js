import { configure } from "@storybook/react";

configure(require.context("../stories", /\.stories\.js?$/), module);
