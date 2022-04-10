const Model = require('../../core/model');
const {ObjectId} = require('mongodb');

class Tarea extends Model{
    constructor(){
        super('tareas');
    }

    //getAll already implemented in model
    //getOne already implemented in model
    //delete already implemented in model
    //update already implemented in model

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
            }
        });
    }
}