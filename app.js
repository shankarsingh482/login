var express = require('express');

const app = express();

const path = require('path');

const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');


//body parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// for static
app.use(express.static(path.join(__dirname, 'public')));

//set view engine
app.engine('handlebars', exphbs({defaultLayout:'home'}));

app.set('view engine','handlebars');



const home = require('./routes/home/index');


app.use('/',home);


const port = process.env.PORT || 4000;
app.listen(port,()=>{

    console.log(`Successfully listening on ${port}`);

});