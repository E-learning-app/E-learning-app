const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy; // Correct the variable name to JwtStrategy
const db = require("../Database/index");

passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.jwt_SECRET,
      },
      (jwtPayload, done) => {
          return db.User.findOne({ where: { id: jwtPayload.id, role: jwtPayload.role } })
  
          .then((user) => {
              console.log("this is the user", user);
              if (user.role === "admin") {
                  console.log("You are an admin and will be redirected to the admin page");
                  return done(null, user, 'admin'); // Return null as the user when it's an admin
              } else if (user.role === "user") {
                  console.log("You are in the user page");
                  return done(null, user); // Return the user object for users
              }
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
  
