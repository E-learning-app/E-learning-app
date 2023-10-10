module.exports = (sequelize, DataTypes) => {
    const Cours = sequelize.define("cours", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    });
    return Cours; 
  };