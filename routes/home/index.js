const express = require('express');
const router = express.Router();




router.all('/*', (req, res, next)=>{

    req.app.locals.layout = 'home';
    next();

});
router.get('/',(req,res)=>{


   //console.log('working in home directory');
   res.render('home/index');
});




router.get('/login', (req, res)=>{

    res.render('home/login');

});


router.get('/register', (req, res)=>{

    console.log('check we are in register section');
    res.render('home/register');

});



module.exports = router;
