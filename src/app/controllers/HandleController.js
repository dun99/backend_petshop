const APIFeatures = require('../../utils/apiFeature');
const catchAsync = require('../../utils/catchAsynError');
const { convertToArray, getOrderAsync } = require('../../utils/helpers');
const AppError = require('../../utils/AppError');

exports.getAll = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    const features = new APIFeatures(
      Model.find(filter).populate(popOptions),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .search()
      .paginate();
    const doc = await features.query;

    const docArr = convertToArray(doc);
    const totalCount = (await Model.find()).length;
    res.header('Access-Control-Expose-Headers', 'x-total-count');
    res.setHeader('x-total-count', totalCount);
    res.status(200).json(docArr);
  });

exports.getAllOrder = (ModelOrder, ModelOrderItem, popOptions) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    const features = new APIFeatures(
      ModelOrder.find(filter).populate(popOptions),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .search()
      .paginate();
    const orders = await features.query;

    const data = [];
    await getOrderAsync(orders, async (order) => {
      const orderItem = await ModelOrderItem.find({
        orders: order._id,
      }).populate('item');
      const orderDetails = {
        id: order._id,
        totalQuantity: order.orderTotalQuantity,
        totalAmount: order.orderTotalAmount,
        info: order.info,
        orderStatus: order.orderStatus,
        items: [...orderItem],
        user: order.user,
      };
      data.push(orderDetails);
    });

    const docArr = convertToArray(data);
    res.status(200).json(docArr);
  });

exports.getAllOrderUser = (ModelOrder, ModelOrderItem, popOptions) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    const features = new APIFeatures(
      ModelOrder.find({
        ...filter,
        user: req.params.userId,
      }).populate(popOptions),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .search()
      .paginate();

    const ordersDoc = await features.query;

    const data = [];
    await getOrderAsync(ordersDoc, async (order) => {
      const orderItem = await ModelOrderItem.find({
        // user: req.params.userId,
        orders: order._id,
      }).populate('item');
      const orderDetails = {
        id: order._id,
        totalQuantity: order.orderTotalQuantity,
        totalAmount: order.orderTotalAmount,
        info: order.info,
        orderStatus: order.orderStatus,
        items: [...orderItem],
        user: order.user,
      };
      data.push(orderDetails);
    });

    const docArr = convertToArray(data);
    res.status(200).json(docArr);
  });

exports.createOrder = (ModelOrder, ModelOrderItem, popOptions) =>
  catchAsync(async (req, res, next) => {
    const order = {
      info: req.body.info,
      orderTotalQuantity: req.body.orderTotalQuantity,
      orderTotalAmount: req.body.orderTotalAmount,
      orderStatus: req.body.orderStatus,
      user: req.body.user,
    };
    const doc = await ModelOrder.create(order);
    req.body.items.forEach(async (product) => {
      const orderItem = {
        item: product.item,
        quantity: product.quantity,
        price: product.price,
      };
      await ModelOrderItem.create({
        ...orderItem,
        orders: doc._id,
      });
    });
    res.status(201).json(doc);
  });

exports.getAllDeep = (Model, popOptions, popOptions2) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    const features = new APIFeatures(
      Model.find(filter).populate({
        path: popOptions,
        populate: {
          path: popOptions2,
        },
      }),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    const docArr = convertToArray(doc);

    res.status(200).json(docArr);
  });

exports.getAllDeepThreeLayers = (Model, popOptions, popOptions2, popOptions3) =>
  catchAsync(async (req, res, next) => {
    let filter = {};

    const features = new APIFeatures(
      Model.find(filter).populate({
        path: popOptions,
        populate: {
          path: popOptions2,
          populate: {
            path: popOptions3,
          },
        },
      }),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    const docArr = convertToArray(doc);

    res.status(200).json(docArr);
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = await Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError('Document not found', 404));
    }
    res.status(200).json(doc);
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json(doc);
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('Document not found'), 404);
    }

    res.status(204).json(null);
  });

exports.updateOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('Document not found', 404));
    }

    res.status(200).json(doc);
  });

exports.getComment = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const comments = await Model.find({
      product: req.params.productId,
    }).populate(popOptions);

    const docArr = convertToArray(comments);
    res.status(200).json(docArr);
  });
