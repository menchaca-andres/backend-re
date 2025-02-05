const GenderModel = require('../models/genderModel');

const GenderController = {
  getAll: async (req, res) => {
    try {
      const generos = await GenderModel.getAll();
      return res.status(200).json({ ok: true, data: generos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { idgenero } = req.params;

      if (!idgenero) {
        return res.status(400).json({ error: "El ID del género es requerido" });
      }

      const genero = await GenderModel.getById(idgenero);
      if (!genero) {
        return res.status(404).json({ error: "Género no encontrado" });
      }

      return res.status(200).json({ ok: true, data: genero });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const { nombregenero } = req.body;

      if (!nombregenero) {
        return res.status(400).json({ error: "El nombre del género es requerido" });
      }

      const newGenero = await GenderModel.create({ nombregenero });

      return res.status(201).json({ ok: true, data: newGenero });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { idgenero } = req.params;

      if (!idgenero) {
        return res.status(400).json({ error: "El ID del género es requerido" });
      }

      const genero = await GenderModel.getById(idgenero);
      if (!genero) {
        return res.status(404).json({ error: "Género no encontrado" });
      }

      await GenderModel.delete(idgenero);

      return res.status(200).json({ ok: true, msg: "Género eliminado exitosamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = GenderController;
