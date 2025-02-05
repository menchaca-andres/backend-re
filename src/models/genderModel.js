const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Gender = db.define('Gender', {
  idgenero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombregenero: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'generos',
  timestamps: false,
});

const GenderModel = {
  getAll: async () => {
    try {
      return await Gender.findAll();
    } catch (error) {
      console.error('Error al obtener los géneros:', error);
      throw error;
    }
  },

  getById: async (idgenero) => {
    try {
      return await Gender.findByPk(idgenero);
    } catch (error) {
      console.error('Error al obtener el género por ID:', error);
      throw error;
    }
  },

  create: async (generoData) => {
    try {
      return await Gender.create(generoData);
    } catch (error) {
      console.error('Error al crear el género:', error);
      throw error;
    }
  },

  delete: async (idgenero) => {
    try {
      const genero = await Gender.findByPk(idgenero);
      if (!genero) {
        throw new Error('Género no encontrado');
      }
      await Gender.destroy({ where: { idgenero } });
      return { message: 'Género eliminado' };
    } catch (error) {
      console.error('Error al eliminar el género:', error);
      throw error;
    }
  }
};

// exportamos Gender y GenderModel para un buen funcionamiento de la relación entre tablas
module.exports = { Gender, GenderModel };