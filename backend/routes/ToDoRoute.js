const { Router } = require('express');
const { getToDo, addToDo, checkedToDo, delToDo } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/add', addToDo);
router.post('/checked', checkedToDo);
router.post('/del', delToDo);

module.exports = router;