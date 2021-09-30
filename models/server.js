const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.pathUsers = '/api/users';

        // MIDDLEWARES
        this.middlewares();

        // ROUTES
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Parseo y lectura del body, Obtener la informacion del request en formato JSON
        this.app.use(express.json())

        // Configuracion del directorio publico
        // Responde al "home / '/'" de la aplicacion
        this.app.use(express.static('public'));
    }

    routes() {
        // Middleware para ciertas rutas, que responde a un prefijo
        this.app.use(this.pathUsers, require('../routes/users'));
    }

    start() {
        this.app.listen(this.port, () => console.log('Servidor listo en el puerto: ', this.port));
    }

}

module.exports = Server;