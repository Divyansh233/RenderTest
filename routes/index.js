//router objects are modules that can be associated to paths
//these contains middleware function associations
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //view named index is rendered
  res.render('index', { title: 'Project Tracker App' });
});

//option 1) extend this router to handle another path
//get handler for /about
// router.get('/about',(req,res,next) => {
//   res.render('about',{title: 'About Us'});
// });

module.exports = router;
