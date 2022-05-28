const express = require("express");
const path = require("path");

const getTranslatedServer = (lang) => {
  const distFolder = path.join(
    process.cwd(),
    `dist/portfolio/server/${lang}`
  );
  const server = require(`${distFolder}/main.js`);
  return server.app(lang);
};

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = express();
  const appEn = getTranslatedServer('en');
  const appPl = getTranslatedServer('pl');
  server.use('/pl', appPl);
  server.use('/en', appEn);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();