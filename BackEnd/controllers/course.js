const { Course, Class } = require("../Database");

module.exports = {
  getAllCoursesFromClass: async (req, res) => {
    const classId = req.params.classId;
    try {
      const classInstance = await Class.findByPk(classId, {
        include: {
          model: Course,
          through: {
            attributes: [],
          },
        },
      });
      if (!classInstance) {
        return res.status(404).json("Class not found");
      }
      res.json(classInstance.courses);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error");
    }
  },

  addCourseToClass: async (req, res) => {
    const classId = req.params.classId;
    const { name, file } = req.body;
    try {
      const newCourse = await Course.create({
        name,
        file,
      });
      const classInstance = await Class.findByPk(classId);
      if (!classInstance) {
        return res.status(404).json("Class not found");
      }
      await classInstance.addCourse(newCourse);
      res.json(newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error");
    }
  },

  updateCourseInClass: async (req, res) => {
    const courseId = req.params.courseId;
    const { name, file } = req.body;
    try {
      const course = await Course.findByPk(courseId);
      if (!course) {
        return res.status(404).json("Course not found");
      }
      await course.update({
        name,
        file,
      });
      res.json(course);
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error");
    }
  },

  deleteCourseFromClass: async (req, res) => {
    const courseId = req.params.courseId;
    try {
      const course = await Course.findByPk(courseId);
      if (!course) {
        return res.status(404).json("Course not found");
      }
      await course.destroy();
      res.json("Course deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal server error");
    }
  },
};
