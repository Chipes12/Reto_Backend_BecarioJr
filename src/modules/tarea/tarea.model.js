const Model = require('../../core/model');

class Tarea extends Model {
    constructor() {
        super('tareas');
    }
    create(body){
        return new Promise((accept, reject) => {
            if(!body.titulo || !body.descripcion || !body.estatus || !body.fecha_entrega){
                reject('Faltan datos');
            } else{
                let nuevaTarea = {
                    titulo: body.titulo,
                    descripcion: body.descripcion,
                    estatus: body.estatus,
                    fecha_entrega: body.fecha,
                    comentarios: body.comentarios,
                    responsable: body.responsable,
                    tags: body.tags          
                };
                this.collection.insertOne(nuevaTarea);
                accept('Success');
            }
        });
    }
    a(){
        return new Promise((accept, reject) => {
            accept("Aguas");
        })
    }
}

module.exports = Tarea;