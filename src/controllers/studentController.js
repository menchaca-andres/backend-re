const Student = require('../models/studentModel');

module.exports = {
    async getAll(req, res) {
        try {
            const students = await Student.findAll();
            res.json(students);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    async getByCi(req, res) {
        try {
            const { ci_est } = req.params;
            const student = await Student.findOne({ where: { ci_est } });

            if (!student) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }

            res.json(student);
        } catch (error) {
            console.error('Error al buscar estudiante por CI:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    async create(req, res) {
        try {
            const newStudent = await Student.create(req.body);
            res.status(201).json(newStudent);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    async update(req, res) {
        try {
            const { ci_est } = req.params;
            const [updated] = await Student.update(req.body, { where: { ci_est } });

            if (!updated) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }

            res.json({ message: 'Estudiante actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar estudiante:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    async delete(req, res) {
        try {
            const { ci_est } = req.params;
            const deleted = await Student.destroy({ where: { ci_est } });

            if (!deleted) {
                return res.status(404).json({ error: 'Estudiante no encontrado' });
            }

            res.json({ message: 'Estudiante eliminado correctamente' });
        } catch (error) {
            console.error('Error al eliminar estudiante:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};
