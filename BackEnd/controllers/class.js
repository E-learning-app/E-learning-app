const { Class } = require("../Database");

module.exports = {
  getAllClasses: async (req, res) => {
    try {
      const classRooms = await Class.findAll();
      console.log(classRooms);
      res.status(200).json(classRooms);
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
      if (classRoom) {
        res.status(200).json(classRoom);
      } else {
        res.status(404).send("class doesn't exist");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  addClass: async (req, res) => {
    const { name, image } = req.body;
    try {
      const classRoom = await Class.create({ name, image });
      res.status(201).json(classRoom);
    } catch (error) {
      console.log(error);
    }
  },
  updateClass: async (req, res) => {
    const classId = req.params.classId;
    const { name, image } = req.body;
    try {
      await Class.update(
        { name, image },
        {
          where: {
            id: classId,
          },
        }
      );
      res.status(201).send("class updated successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  deleteClass: async (req, res) => {
    const classId = req.params.classId;
    try {
      await Class.destroy({
        where: {
          id: classId,
        },
      });
      res.status(204).send("class deleted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
