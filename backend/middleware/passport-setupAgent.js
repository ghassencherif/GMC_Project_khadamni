const JwtStrategy = require("passport-jwt/lib").Strategy;
const ExtractJwt = require("passport-jwt/lib").ExtractJwt;
const passport = require("passport/lib");
const config = require("config");
const Agent = require("../model/Agent");
const secretOrKey = config.get("secretOrKey");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;
    try {
      const agent = await Agent.findById(id).select("-password");
      agent ? done(null, agent) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);
module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
