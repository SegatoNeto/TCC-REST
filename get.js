const http = require("http");

const optionsget = {
  "method": "GET",
  "hostname": "localhost",
  "port": "3333",
  "path": "/emails",
  "headers": {
    "Content-Length": "0"
  }
};

const req = http.request(optionsget, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

