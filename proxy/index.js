const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { application } = require("express");

const PORT = 8080;  // Server listening port

require("dotenv").config();

const SERVER = express();
SERVER.use(cors());

const API_KEY = process.env.IMDB_APY_KEY;

SERVER.get("/search", (req, res) => {    
    const lang = "eng";
    const query = req.headers.query;

    const options = {
        method: "GET",
        url: `https://imdb-api.com/${lang}/API/Search/${API_KEY}/${query}`,
    }
    console.log(options);

    axios.request(options)
        .then((response) => {
            res.json(response.data);
        }).catch((error) => {
            console.error(error)
        })
})

SERVER.get("/details", (req, res) => {
    const lang = "eng";
    const {id} = req.headers;
    
    console.log(id);
    const options = {
        method: "GET",
        url: `https://imdb-api.com/${lang}/API/Title/${API_KEY}/${id}`,
    }

    console.log(options.url);
    axios.request(options)
        .then((response) => {
            console.log(response.data);
            res.json(response.data);
        }).catch((error) => {
            console.error(error)
        })
})

SERVER.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})