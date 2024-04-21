import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const url = "https://isro.vercel.app"

app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/get-spacecrafts", async (req, res) => {
  // const searchID= req.body.id ;
  try {
    const result = await axios.get(url + "/api/spacecrafts");
    res.render("spacecrafts.ejs", { content:JSON.stringify(result.data)});
  }
  catch (error) {
    res.render("spacecrafts.ejs", { content: JSON.stringify(error.result.data) });
  }
});

app.get("/get-launchers", async (req, res) => {
  try {
    const result = await axios.get(url + "/api/launchers");
    res.render("launchers.ejs", { content: JSON.stringify(result.data) });
  }
  catch (error) {
    res.render("launchers.ejs", { content: JSON.stringify(error.result.data) });
  }
});

app.get("/get-customer_satellites", async (req, res) => {
  try {
    const result = await axios.get(url + "/api/customer_satellites");
    res.render("customerSatellite.ejs", { content: JSON.stringify(result.data) });
  }
  catch (error) {
    res.render("customerSatellite.ejs", { content: JSON.stringify(error.result.data) });
  }
});

app.get("/get-centres", async (req, res) => {
  try {
    const result = await axios.get(url + "/api/centres");
    res.render("centres.ejs", { content: JSON.stringify(result.data) });
  }
  catch (error) {
    res.render("centres.ejs", { content: JSON.stringify(error.result.data) });
  }
});


app.listen(port, () => {
  console.log(`Sever is running on ${3000}`);
});