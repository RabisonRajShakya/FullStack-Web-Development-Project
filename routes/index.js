var express = require('express');
const { validateTokenMiddleware } = require('../middleware/AuthMiddleware');
const { verifyUserController } = require('../controller/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testing', function(req, res, next) {
  // res.send("This is another router");
  res.json({
    name: "John Doe",
    age: 30,
    tech: ["Java", "Python", "React", "Node.js", "Express"],
  });
});

router.get("/api/verify/me", validateTokenMiddleware, verifyUserController);

module.exports = router;
