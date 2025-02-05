const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

// importar Gender en vez de GenderModel
const { Gender } = require('./genderModel');

const Student = db.define('Student', {
  id_est: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ci_est: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  nombre_est: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  appat_est: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  apmat_est: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  fnac_est: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dir_est: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ncel_est: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  coins_est: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cont_est: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  idgenero: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'generos',
      key: 'idgenero',
    },
  },
}, {
  tableName: 'estudiantes',
  timestamps: false,
});

Student.belongsTo(Gender, { foreignKey: 'idgenero', as: 'genero' });

module.exports = Student;
