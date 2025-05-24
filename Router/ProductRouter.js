const express = require("express");
const { GetProduct } = require("../Controller/ProductController");

const Routers = express.Router();

Routers.route("/GetProduct").get(GetProduct);

module.exports = Routers;