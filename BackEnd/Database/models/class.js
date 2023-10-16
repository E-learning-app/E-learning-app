module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "class",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeDestroy: async (classInstance, options) => {
          try {
            const courses = await classInstance.getCourses();
            for (const course of courses) {
              await course.destroy();
            }
            const users = await classInstance.getUsers();
            for (const user of users) {
              await user.destroy();
            }
          } catch (error) {
            console.error(
              "Error deleting associated courses and users:",
              error
            );
          }
        },
      },
    }
  );
  return Class;
};
