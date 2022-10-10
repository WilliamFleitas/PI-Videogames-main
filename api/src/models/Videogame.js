const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //define sirve para crear un modelo para la tabla
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
   
  },
  {
    timestamps: false,
  });
};
