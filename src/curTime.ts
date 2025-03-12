import {Hono} from "hono";

import {serve} from "@hono/node-server";

const app = new Hono();

  


serve(app);
console.log(`server is running on http://localhost:3000`);
