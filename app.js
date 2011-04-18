var http = require("http");

var server = http.createServer(function (request, response) {

	var q = require("url").parse(request.url, true);

	response.writeHead(200, {

		"Content-type": "text/plain"

	});

	if (q.query.name) {

		response.write("Name: " + q.query.name);

	}

	response.end("\n\nNode.js");

})

server.listen(25565);

console.log("Listening on port 25565");
