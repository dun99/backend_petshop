class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = [
      '_page',
      '_sort',
      '_limit',
      'fields',
      'name',
      'categories',
    ];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(_gte|_gt|_lte|_lt)\b/g,
      (match) => `$${match}`
    );

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryString._page * 1 || 1;
    const limit = this.queryString._limit * 1;
    const skip = (page - 1) * limit;
    if (this.queryString._page || this.queryString._limit)
      this.query = this.query.skip(skip).limit(limit);

    return this;
  }

  search() {
    const { name } = this.queryString;
    if (name)
      this.query = this.query.find({ name: { $regex: '.*' + name + '.*' } });

    return this;
  }
}

module.exports = APIFeatures;
