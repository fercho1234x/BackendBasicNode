const { Router } = require('express');
const { getUsers, postUsers, putUsers, deleteUsers } = require('../controllers/users');

const router = Router();

router.get('/:id', getUsers);

router.put('/:id', putUsers);

router.post('/', postUsers);

router.delete('/:id', deleteUsers);

module.exports = router;