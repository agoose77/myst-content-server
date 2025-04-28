#!/usr/bin/env node

import express from "express";
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.json({
    version,
    links: {
      site: `http://localhost:${port}/config.json`,
    },
  });
});
app.use("/", express.static("./public/"));
app.use("/content", express.static("./content/"));
app.use("/config.json", express.static("./config.json"));
app.use("/objects.inv", express.static("./objects.inv"));
app.use("/myst.xref.json", express.static("./myst.xref.json"));
app.use("/myst.search.json", express.static("./myst.search.json"));
const server = app.listen(port, () => {
  console.debug(`Content server listening on port ${port}`);
});
