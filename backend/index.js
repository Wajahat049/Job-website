// const axios = require("axios");
// const cheerio = require("cheerio");
// const pretty = require("pretty");
// const fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");

// let rawdata = fs.readFileSync("E:\\job-search-website\\src\\Assests\\1,144 Computer Jobs in Karachi - 22 March, 2022 _ Indeed.com Pakistan(1).json");
// let data = JSON.parse(rawdata);
// for(var i=0;i<data.length;i++){
// console.log(data[i].Field2);
// console.log(data[i].Field4);
// console.log(data[i].Field5);
// console.log("");

// }

// const url = "https://pk.indeed.com/m/jobs?q=Computer&l=karachi";

// async function Scrape(){
// const { data } = await axios.get(url);
//     // Load HTML we fetched in the previous line
//     const $ = cheerio.load(data);
//     // // Select all the list items in plainlist class
//     const listItems = $(".mosaic-provider-jobcards .slider_container ");
//     listItems.each(function (idx, el) {
//       console.log($(el).html());
//     });
//     // console.log("JOBS",)

// }

// Scrape()

async function getData() {
  const uri =
    "mongodb+srv://wajahat:wajju123@cluster0.0buc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  let result = await client.connect();
  // client.connect(async err =>{
  let collection = result.db("GoJobber").collection("Users");
  // collection.insertOne({name:"ahmed"}, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   // db.close();
  // });
  let response = await collection.find({}).toArray();
  return response;
  // console.log(response[0].name)

  // })
}

async function postData(user) {
  const uri =
    "mongodb+srv://wajahat:wajju123@cluster0.0buc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  let result = await client.connect();
  // client.connect(async err =>{
  let collection = result.db("GoJobber").collection("Users");
  collection.insertOne(user, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    // db.close();
  });
}

app.get("/AllUsers", (req, res) => {
  var resp = getData();
  resp.then((e) => {
    res.send(e);
  });
});

app.post("/CreateUser", (req, res) => {
  console.log("New User", req.body);
  postData(req.body);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
