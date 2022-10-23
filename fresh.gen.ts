// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/article/[slug].tsx";
import * as $3 from "./routes/index.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/article/[slug].tsx": $2,
    "./routes/index.tsx": $3,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
