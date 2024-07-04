const http = require('http');

const server = http.createServer((req, res) => {
  const htmlTemplateStr = `
  <html>
     <head></head>
     <body>
          <h1>Hello in NodeJS HTTP module world and observing via nodemon!</h1>
     </body>
  </html>
`;

  res.write(htmlTemplateStr);

  res.end();
});

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
