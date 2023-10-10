const { Class } = require("../Database/models/class");

module.exports = {
  getAllClasses: async (req, res) => {
    try {
      const classRoom = await Class.findAll();
      res.status(200).json(classRoom);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  getOneClass: async (req, res) => {
    const classId = req.params.classId;
    try {
      const classRoom = await Class.findOne({
        Where: {
          id: classId,
        },
      });
      res.status(200).json(classRoom);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  addClass: async (req, res) => {},
};
