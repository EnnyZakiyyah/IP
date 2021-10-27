const express = require("express");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const app = express();
passport.use(new googleStrategy({
    clientID : "792644714863-v5c95dko3p8bfune4j3pao6g89qcrgv4.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL : "/auth/google/callback",
},(accessToken,refreshToken,profile,done) =>{
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profile)
}))
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}))
app.get("/auth/google/callback", passport.authenticate("google"))

const port = process.env.PORT || 3000;
app.listen(port)



// clientID = "792644714863-v5c95dko3p8bfune4j3pao6g89qcrgv4.apps.googleusercontent.com"
// clientSecret = "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"
// callbackURL = "/auth/google/callback"