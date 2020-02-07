import { createClient } from "contentful";
const chalk = require("chalk");
//const { SPACE_ID, CONTENTFUL_ENVIRONMENT, ACCESS_TOKEN } = process.env;
console.log(
  chalk.red("this is my environment variable:"),
  process.env.SPACE_ID
);

function fetchContentful(environment = "preview") {
  if (environment == "preview") {
    const client = createClient({
      space: process.env.SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.ACCESS_TOKEN,
      host: "preview.contentful.com"
    });
    return client;
  } else if (environment == "production") {
    const client = createClient({
      space: process.env.SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.ACCESS_TOKEN,
      host: "cdn.contentful.com"
    });
    return client;
  }
}

async function fetchPageBySlug(slug) {
  return await this.client.getEntries({
    content_type: "landingPage",
    "fields.slug": slug
  });
}

export { fetchContentful };
