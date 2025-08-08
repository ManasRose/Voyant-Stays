const User=require("../models/user")

module.exports.renderSignupFrom=async (req,res)=>{
    res.render("users/signup");
}

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password); //passport method
        
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust");
            const redirectUrl = req.session.redirectUrl || '/listings';
            res.redirect(redirectUrl);
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginFrom= (req, res) => {
    res.render("users/login");
}

module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl=res.locals.redirectUrl||'/listings';
    res.redirect(redirectUrl); 
};
module.exports.logout= (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
}
