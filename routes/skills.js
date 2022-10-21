var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths begin with "/skills"
// always run from top to bottom 
// GET /skills
router.get('/', skillsCtrl.index);
//get/skills/new
router.get('/new',skillsCtrl.new)
router.get('/:id',skillsCtrl.show)
//router.get('/new',skillsCtrl.new)
//get/skills/:id
//router.get('/:id',skillsCtrl.show)
//get/
router.post('/', skillsCtrl.create);
router.delete('/:id',skillsCtrl.delete)


module.exports = router;
