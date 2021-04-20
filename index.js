const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();


nunjucks.configure('views',{
    express:app,
    autoescape:true,
});
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render('index.html',{
        id : req.query.id,
        pw : req.query.pw
    });
});

app.get('/addUser.html',(req,res)=>{
    
    res.render('addUser.html',{
        id : req.query.id,
        pw : req.query.pw,
        name : req.query.name,
        age : req.query.age
    });
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //res.send('post?');
});

app.post('/addUser.html',(req,res)=>{
    console.log(req.body);
});


app.listen(3000,()=>{
    console.log('server is opened');
});