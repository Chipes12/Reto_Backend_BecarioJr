const router = require('express').Router();
const controller = require('./tarea.controller');

router.route('/')
 /**
* @swagger
*   /tareas:
*     get:
*       tags:
*       - Tareas
*       description: Obtener todas las tareas
*       responses:
*         200:
*           description: Arreglo con una la lista de tareas
*/
.get(controller.getAll) 
  /**
   * @swagger
   *   /tareas:
   *     post:
   *       tags:
   *       - Tareas
   *       description: Crear una tarea 
   *       parameters:
   *         - in: body
   *           name: tarea
   *           description: titulo? descripcion? estatus? fecha? comentarios? responsable? tags?
   *           schema:
   *              type: object
   *              required:
   *                  - titulo
   *                  - descripcion
   *                  - estatus
   *                  - fecha_entrega
   *              optional:
   *                  - comentarios
   *                  - reponsable
   *                  - tags
   *              properties:
   *                  titulo:
   *                      type: String
   *                  descripcion:
   *                      type: String
   *                  estatus:
   *                      type: String
   *                  fecha_entrega:
   *                      type: Date
   *                  comentarios: 
   *                      type: String
   *                  responsable:
   *                      type: String
   *                  tags:
   *                      type: [Tags]
   *       responses:
   *         201:
   *           description: String con mensaje de exito
   *         500:
   *           description: String con mensaje de error
   */
.post(controller.create);

router.route('/:id')
  /**
   * @swagger
   *   /tareas/{id}:
   *     get:
   *       tags:
   *       - Tareas
   *       description: Obtener una tarea por su ID
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: El id unico de la tarea
   *       responses:
   *         200:
   *           description: Un objeto con la información de la tarea
   *         500:
   *           description: String con el mensaje de error
   */
.get(controller.getOne)
  /**
   * @swagger
   *   /tareas/{id}:
   *     put:
   *       tags:
   *       - Tareas
   *       description: actualizar una tarea por su id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: el id unico de la tarea
   *         - in: body
   *           name: actualizaciones
   *           description: Los cambios que se hacen a la tarea
   *           schema:
   *              type: object
   *              optional:
   *                  - titulo
   *                  - descripcion
   *                  - estatus
   *                  - fecha_entrega
   *                  - comentarios
   *                  - responsable
   *                  - tags
   *              properties:
   *                  titulo:
   *                      type: String
   *                  descripcion:
   *                      type: String
   *                  estatus:
   *                      type: String
   *                  fecha_entrega:
   *                      type: Date
   *                  comentarios: 
   *                      type: String
   *                  responsable:
   *                      type: String
   *                  tags:
   *                      type: [Tags]
   *       responses:
   *         200:
   *           description: String con mesaje de exito
   *         500:
   *           description: String con mensaje de erro
   */
.put(controller.update)
  /**
   * @swagger
   *   /tareas/{id}:
   *     delete:
   *       tags:
   *       - Tareas
   *       description: borrar una tarea por su id
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: el id unico de la tarea
   *       responses:
   *         200:
   *           description: String con mensaje de exito
   *         500:
   *           description: String con mensaje de error
   */
.delete(controller.delete);

module.exports = router;