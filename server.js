const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
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
app.use(passport.session());
app.use(session({ secret: "cats" }));

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

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/success", (req, res) => {
  res.send("success");
});

//GOOGLE CALL BACK
app.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
    accessType: "offline",
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

//FACEBOOK CALL BACK

app.get("/facebook", passport.authenticate("facebook"));

app.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/fail",
  }),
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

//TWITTER CALL BACK

app.get("/twitter", passport.authenticate("twitter"));

app.get(
  "/twitter/callback",
  passport.authenticate("twitter", {
    failureRedirect: "/fail",
  }),
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

//KAKAOTALK CALLBACK

app.get(
  "/kakaotalk",
  passport.authenticate("kakao", {
    failureRedirect: "/fail",
  })
);

app.get(
  "/kakaotalk/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/fail",
  }),
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

//NAVER CALLBACK

app.get(
  "/naver",
  passport.authenticate("naver", {
    failureRedirect: "/fail",
  })
);

app.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/fail",
  }),
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

//YOUTOBE CALLBACK

app.get(
  "/youtube",
  passport.authenticate("youtube", {
    failureRedirect: "/fail",
  })
);
app.get(
  "/youtube/callback",
  passport.authenticate("youtube", {
    failureRedirect: "/fail",
  }),
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

//INSTAGRAM CALLBACK

app.get(
  "/instagram",
  passport.authenticate("instagram", {
    failureRedirect: "/fail",
  })
);
app.get(
  "/instagram/callback",
  passport.authenticate("instagram", {
    failureRedirect: "/fail",
  }),
  (req, res) => {
    // console.log(req.ip);
    // console.log(req.headers["user-agent"]);
    // console.log("THIS IS BEFORE REDIRECTVVVV");
    // console.log(req.user);
    // console.log("THIS IS BEFORE REDIRECT^^^^");
    // res.setHeader("Authorization", "IF YOU SEE THIS, THE TEST IS COMPLETE");
    res.json(req);
  }
);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
