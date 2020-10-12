const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");
const TwitterStrategy = require("passport-twitter").Strategy;
const KakaoStrategy = require("passport-kakao").Strategy;
const NaverStrategy = require("passport-naver").Strategy;

passport.serializeUser(function (user, done) {
  console.log("THIS RUN IN SER");
  done(null, user);
  console.log("----------------------- END OF SER");
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

//GOOGLE STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1064798903066-89jln5roavgbleqlbt9ahl0ebpo9ae3u.apps.googleusercontent.com",
      clientSecret: "RT2-EteVF6OsM2cFtlBuN5xB",
      callbackURL: "https://nguyennhat.work/oauth-test/google/callback",
      // callbackURL: "http://localhost:12000/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      //Check if email exist
      //if not create user with email and name, then must ask for name and unique handle before full access
      //if email exist then return a refreshToken
      console.log("THIS RUN AFTER SUCCESS");
      console.log(`This is profile id ${profile.id}`);
      console.log(`This is access token ${accessToken}`);
      console.log(`This is refresh token ${refreshToken}`);
      console.log("-----------------------");
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return cb(null, profile);
      //return profile id to serilize function above
    }
  )
);

//FACEBOOK STATEGY
passport.use(
  new FacebookStrategy(
    {
      clientID: "652325949031514",
      clientSecret: "332fb4f54e2e0c4e7e8a98008b07ceb5",
      callbackURL: "https://nguyennhat.work/oauth-test/facebook/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("THIS RUN AFTER SUCCESS");
      console.log(`This is profile id ${profile.id}`);
      console.log(`This is access token ${accessToken}`);
      console.log(`This is refresh token ${refreshToken}`);
      console.log("-----------------------");
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return cb(null, profile);
    }
  )
);

//TWITTER STRATEGY

passport.use(
  new TwitterStrategy(
    {
      consumerKey: "lyIzzAQVV3RMnSsBrfixpOejt",
      consumerSecret: "T8bjmgRMUNQLKa63zqxAX7MCbv3Nb6maCpZ5bWYwMpzHsmE97Z",
      callbackURL: "https://nguyennhat.work/oauth-test/twitter/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("THIS RUN AFTER SUCCESS");
      console.log(`This is profile id ${profile.id}`);
      console.log(`This is access token ${accessToken}`);
      console.log(`This is refresh token ${refreshToken}`);
      console.log("-----------------------");
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return cb(null, profile);
    }
  )
);

//KAKAO STRATEGY

passport.use(
  new KakaoStrategy(
    {
      clientID: "84d2364d0dd4619ce2b1d10de32b905f",
      clientSecret: "eg9QKdIJJqJ2NHIcazgqikXJcKMM5Mts", // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
      callbackURL: "https://nguyennhat.work/oauth-test/kakaotalk/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("THIS RUN AFTER SUCCESS");
      console.log(`This is profile id ${profile.id}`);
      console.log(`This is access token ${accessToken}`);
      console.log(`This is refresh token ${refreshToken}`);
      console.log("-----------------------");
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return cb(null, profile);
    }
  )
);

//NAVER STRATEGY

passport.use(
  new NaverStrategy(
    {
      clientID: "Sh1RzXRNy4IvKAfpu8Xo",
      clientSecret: "h2zMalnPeH",
      callbackURL: "https://nguyennhat.work/oauth-test/naver/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("THIS RUN AFTER SUCCESS");
      console.log(`This is profile id ${profile.id}`);
      console.log(`This is access token ${accessToken}`);
      console.log(`This is refresh token ${refreshToken}`);
      console.log("-----------------------");
      profile.accessToken = accessToken;
      profile.refreshToken = refreshToken;
      return cb(null, profile);
    }
  )
);
