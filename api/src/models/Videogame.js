const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  //define sirve para crear un modelo para la tabla
  sequelize.define('videogame', {
    nombre: {
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
    fecha_de_lanzamiento: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT
    },
    plataformas: {
      type: DataTypes.TEXT,
      allowNull: false
    }
   
  },
  {
    timestamps: false,
  });
};
