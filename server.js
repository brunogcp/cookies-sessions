const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000 } // 1 minute for demonstration
}));

app.get('/', (req, res) => {
    // Checking and setting a cookie
    if (!req.cookies.hello) {
        res.cookie('hello', 'world', { maxAge: 900000, httpOnly: true });
        res.send('🍪 Cookie set!');
    } else {
        res.send('👋 Hello again!');
    }
});

app.get('/session', (req, res) => {
    // Setting session data
    if (req.session.views) {
        req.session.views++;
        res.send(`👀 You visited this page ${req.session.views} times`);
    } else {
        req.session.views = 1;
        res.send('👋 Welcome to the session demo. Refresh!');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));