const convertToArray = (obj) => (obj && Object.values(obj)) || [];

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image')) {
    return cb(
      new AppError('Not an image! Please upload only images', 400),
      false
    );
  }

  cb(null, true);
};
module.exports = {
  convertToArray,
  filterObj,
  multerFilter,
};
