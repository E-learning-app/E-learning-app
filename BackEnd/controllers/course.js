const { Course } = require("../Database");  

module.exports = {
    getAllCourses: async (req, res) => {
      try {
        const courses = await Course.findAll();
        res.status(201).json(courses);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },
  
  deleteOneCourse: async (req, res) => {
    const {id} =req.params
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return res.status(404).end();
      }
      const del =await course.destroy();
      res.status(204).json(del);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}