const Passport = require("passport");
const LocalStrategy = require("passport-local");

const Person = require('./models/person');

Passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    try {
        const user = await Person.findOne({username: USERNAME});
        if(!user)
            return done(null, false, {message: 'Incorrect username'});
        const isPaaswordMatch = user.password === PASSWORD ? true : false;
        if(isPaaswordMatch){
            return done(null, user);
        } else {
            return done(null, false, {message: 'Incorrect password'});
        }
    }catch(err){
        return done(err);
    }
}))

module.exports = Passport;

