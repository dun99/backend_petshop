const express = require('express');
const router = express.Router();

const commentController = require('../app/controllers/CommentController');

router
  .route('/')
  .get(commentController.getAllComments)
  .post(commentController.createComment);

router
  .route('/:id')
  .get(commentController.getOneComment)
  .put(commentController.updateComment)
  .delete(commentController.deleteComment);

router.route('/product/:productId').get(commentController.getComments);
module.exports = router;
