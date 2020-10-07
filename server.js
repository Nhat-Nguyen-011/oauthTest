const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./passport-init");

//PRIVATE SERVER DEV CONFIGS

const PORT = 12000;

//END CONFIGS

const app = express();
app.set("trust proxy", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());
// app.use(passport.session());

app.get("/", (req, res) => res.send("this is default page"));
app.get("/fail", (req, res) => res.send("login failed"));
app.get("/main", (req, res) => {
  res.send("login successs");
});

app.get("/test", (req, res) => {
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);
  res.send("testttt");
});

app.get("/success", (req, res) => {
  res.send("success");
});

app.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    accessType: "offline",
    approvalPrompt: "force",
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/fail" }),
  (req, res) => {
    console.log(req.ip);
    console.log(req.headers["user-agent"]);
    console.log("THIS IS BEFORE REDIRECTVVVV");
    console.log(req.user);
    console.log("THIS IS BEFORE REDIRECT^^^^");
    res.setHeader("Authorization", "IF YOU SEE THIS, THE TEST IS COMPLETE");
    res.json(req.user);
  }
);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
