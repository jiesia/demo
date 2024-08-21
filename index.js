const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const person = {
    name: "John Doe",
    age: 30,
  };

  res.end(JSON.stringify(person));
});

server.listen(3000);
