const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser(function (user, done) {
  console.log('THIS RUN IN SER');
  done(null, user);
  console.log('----------------------- END OF SER');
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '1064798903066-89jln5roavgbleqlbt9ahl0ebpo9ae3u.apps.googleusercontent.com',
      clientSecret: 'RT2-EteVF6OsM2cFtlBuN5xB',
      callbackURL: 'http://localhost:4000/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      //Check if email exist
      //if not create user with email and name, then must ask for name and unique handle before full access
      //if email exist then return a refreshToken
      console.log('THIS RUN AFTER SUCCESS');
      console.log(`This is ${profile}`);
      console.log('-----------------------');
      return cb(null, profile.id);
      //return profile id to serilize function above
    }
  )
);
