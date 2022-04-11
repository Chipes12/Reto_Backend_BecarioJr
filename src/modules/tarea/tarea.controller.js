const Tarea = require('./tarea.model');

const TareasController = {
    getAll: (req, res) => {
        const tarea = new Tarea();
        tarea.getAll().then(results => {
            res.send(results);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    getOne: (req, res) => {
        const tarea = new Tarea();
        tarea.getOne(req.params.id).then(result => {
            if(result) res.send(result);
            else res.sendStatus(404);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    create: (req, res) => {
        const tarea = new Tarea();
        tarea.create(req.body).then(result => {
            if(result) res.sendStatus(201);
        }).catch(err => {
            res.send(500);
        });
    },
    update: (req, res) => {
        const tarea = new Tarea();
        tarea.update(req.params.id, req.body).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    },
    delete: (req, res) => {
        const tarea = new Tarea();
        tarea.delete(req.params.id).then(result => {
            if(result) res.sendStatus(200);
        }).catch(err => {
            res.sendStatus(500);
        });
    }
}

module.exports = TareasController;

/*

*/