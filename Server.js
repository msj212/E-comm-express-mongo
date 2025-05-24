//commen depen
const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
dotenv.config({path:path.join(__dirname,"Config","Config.env")});

//swagger info

const swaggeroption = {
    definition:{
        openapi:"3.0.0",
         info: {
            title: "E-Commerce API",
            version: "1.0.0",
            description: "Comprehensive API documentation for the E-Commerce backend system, including product, user, and order management."
        },
        servers:[
            {
                url: `http://localhost:${process.env.PORT || 3000}/api/v1/`,
                description: "Local Development Server"
            },
        ],
    },
    apis:['./Router/*.js']
}

const swaggerspec = swaggerjsdoc(swaggeroption);

app.use("/api/doc",swaggerui.serve,swaggerui.setup(swaggerspec));

//Router import
const Product = require("./Router/ProductRouter");

app.use("/api/v1/",Product);

app.listen(process.env.PORT,()=>{
    console.log(`SERVER IS RUNING IN ${process.env.PORT} AND SERVER NAME IS ${process.env.NODE_ENV}`);
})

