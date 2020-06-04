"use strict";

const DbService = require("moleculer-db");

module.exports = {
	name: "demo",
	mixins: [DbService]
};