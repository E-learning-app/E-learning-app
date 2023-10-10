const { Class } = require("../Database/models/class");

module.exports = {
  getAllClasses: async (req, res) => {
    try {
      const classRoom = await Class.findAll();
      res.status(201).json(classRoom);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
