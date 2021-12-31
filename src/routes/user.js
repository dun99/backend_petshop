const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getOneUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
