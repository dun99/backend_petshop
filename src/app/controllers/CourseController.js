const Course = require('../models/Course');
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('detailCourse', { course });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
