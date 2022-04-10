const router = require('express').Router();

const tareasRoutes = require('../models/tarea/tarea.routes');

router.use('/tareas', tareasRoutes);

module.exports = router;