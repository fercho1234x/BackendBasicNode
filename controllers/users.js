const { responsel, request } = require('express');

// res = response === res: Response
const getUsers = (req = request, res = response) => {
    // res.status(403).json

    // Parametros opcionales
    const { q } = req.query;

    res.json({
        msg: 'GET API',
        q
    });
}

const postUsers = (req, res) => {

    const { id, name } = req.body;

    res.json({
        msg: 'POST API',
        id,
        name
    });
}

const putUsers = (req, res) => {

    // Parametros requeridos
    const id = req.params.id;

    res.json({
        msg: 'PUT API',
        id
    });
}

const deleteUsers = (req, res) => {
    res.json({
        msg: 'DELETE API'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
};