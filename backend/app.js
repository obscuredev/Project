const express = require("express");
const path = require("path");
const app = express();
require("./config/database");
const Login = require("./models/user");

const port = process.env.PORT || 3005;

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const loginDetails = new Login({
      username: req.body.username,
      password: req.body.password,
    });

    const loggedIn = await loginDetails.save();
    // res.status(201).render("login");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
