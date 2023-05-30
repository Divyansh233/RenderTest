//import express
const express = require('express');
//create router object
const router = express.Router();
//configure middleware
//ALL paths here are relative to /About
//GET handler for /About/
//root of the about section
router.get('/',(req,res,next) => {
    res.render('about',{title: 'About us'});
});

//export it
module.exports = router;