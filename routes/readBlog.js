const express = require('express');
const router = express.Router();
const {connection} = require('../database/sql.js');

router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM blogsTable', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;