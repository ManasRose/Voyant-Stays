if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

//Requirements
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsmate = require('ejs-mate');
const session = require('express-session');
const MongoStore = require('connect-mongo');//to implement sessions during deployment
const flash = require('connect-flash');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressErrors = require("./utils/ExpressErrors");
const User = require("./models/user");

// Routers
const listingsRouter = require('./routes/listing');
const reviewsRouter = require('./routes/review');
const userRouter = require("./routes/user");
const extraRouter= require("./routes/extras");

const app = express();

const dbUrl=process.env.ATLASDB_URL;

//1. VIEW ENGINE AND PARSER SETUP
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//2. DATABASE CONNECTION
async function connectDB() {
    await mongoose.connect(dbUrl);
}
connectDB().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});


//3. SESSION AND AUTHENTICATION SETUP
const store=MongoStore.create({ //without this, ur session info used to be stored in ur local storage
    mongoUrl:dbUrl, //agar u want ki session info local db par store ho, to just pass localUrl
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})
store.on("error",()=>{
    console.log("Error in Store")
})

const sessionOptions = {
    store:store, //session information abb atlas mein store hone wali hai
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//4. CUSTOM MIDDLEWARE (LOCALS)
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});

//5. Routes
app.get('/', (req, res) => {
    res.redirect('/listings');
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/extras",extraRouter);


//6. Page Not Found
app.use((req, res, next) => {
  const err = new ExpressErrors(404, "Page Not Found");
  next(err);
});


//7. Error Handeling
app.use((err, req, res, next) => {
    let { status = 500, message = "Something Went Wrong" } = err;
    res.status(status).render("error", { message });
});

//8. Server Listening
app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});