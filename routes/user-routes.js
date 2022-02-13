const { Router } = require('express');
const { check } = require('express-validator')
const { validateFields} = require('../middlewares/validate-fields')
const { getUsers, createUser, updateUser, deleteUser} = require('../controllers/user-controller')

const router = Router();

router.get('/get', getUsers);

router.post('/create',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validateFields
  ],
  createUser
);

router.put('/update/:id',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateFields
  ],
   updateUser
);

router.delete('delete/:id',deleteUser)

module.exports = router