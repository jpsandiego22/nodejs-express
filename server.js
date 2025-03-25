require('dotenv').config();
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const usedTokens = new Set();
app.set('view engine','ejs')
app.use(logger);

const path = '/api/v1';
const { bearerTokenRequest,validateToken} = require('./auth');

// TOKEN REQUEST
app.post(path+'/auth/token',jsonParser,bearerTokenRequest)
// TOKEN REQUEST

const userRouter = require('./routes/users')
app.use(path+'/users',validateToken, userRouter)

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.use((req,res)=> {
    res.status(404).json({
        status:'404',
        message: 'Invalid Request'
    });
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server started on port: ",process.env.APP_PORT);
});