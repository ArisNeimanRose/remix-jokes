import type { LinksFunction } from "@remix-run/node";

import stylesURL from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesURL },
];

export default function IndexRoute() {
  return <div>Hello Index Route</div>;
}
