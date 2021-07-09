const express = require("express");
const fs = require("fs");
const manifest = require("./manifest.js");
const app = express();

app.get("/", function (req, res) {
  res.send('<a href="/getfile">get a manifest file</a>');
});

app.get("/getfile", (req, res) => {
  const filePath = `${__dirname}/downloadingmanifest.json`;
  fs.writeFileSync(filePath, JSON.stringify(manifest));
  res.download(filePath, (err) => {
    if (err) {
      console.log(err);
    } else {
      fs.unlinkSync(filePath);
    }
  });
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
