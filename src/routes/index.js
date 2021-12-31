const productsRouter = require('./products');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const categoryRouter = require('./categories');
const userRouter = require('./user');
const commentRouter = require('./comment');
function routes(app) {
  app.use('/products', productsRouter);
  app.use('/carts', cartRouter);
  app.use('/orders', orderRouter);
  app.use('/categories', categoryRouter);
  app.use('/users', userRouter);
  app.use('/comments', commentRouter);
}

module.exports = routes;
