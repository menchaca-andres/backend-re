const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

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
  carrera_est: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
}, {
  tableName: 'estudiantes',
  timestamps: false,
});

module.exports = Student;