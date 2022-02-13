const { Router } = require('express');
const { getUsers, createUser} = require('../controllers/user-controller')

const router = Router();

router.get('/users', getUsers);

router.post('/users', createUser)

module.exports = router