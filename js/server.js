/*eslint no-console: 0, no-unused-vars: 0, no-undef:0*/
/*eslint-env node, es6 */

"use strict";
var express = require("express");
var port = process.env.PORT || 3000;
var server = require("http").createServer();
var chatServer = require("./chatServer");

//Initialize Express App for XS UAA and HDBEXT Middleware
var app = express();
app.use("/node/chat", chatServer(server));

server.on("request", app);
server.listen(port, function() {
	console.log("HTTP Server: " + server.address().port);
});
