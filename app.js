const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const apiRoutes = require('./src/routes/routes');
const Database = require('./src/core/database');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
//app.use('/', apiRoutes);

const swaggerOptions = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'Reto BackEnd jr',
            description: 'Administrador de tareas',
            version: '1.0.0',
            servers: ['http://localhost:'+port]
        }
    },
    apis: ['./src/modules/**/*.routes.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

Database.connect().then(() => {
    server =  app.listen(port, () => {
        console.log('App is listening to port ' + port);
    });
});