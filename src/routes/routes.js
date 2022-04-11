const router = require('express').Router();

const tareasRoutes = require('../modules/tarea/tarea.routes');

router.use('/tareas', tareasRoutes);

module.exports = router;