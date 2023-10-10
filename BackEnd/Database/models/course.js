module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    });
    return Course; 
  };