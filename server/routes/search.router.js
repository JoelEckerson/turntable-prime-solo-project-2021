const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:search', (req, res) =>{
    const query = `SELECT * FROM "album" 
    WHERE UPPER("artist") LIKE UPPER('%' || $1 || '%') 
    OR UPPER("album") LIKE UPPER('%' || $1 || '%') 
    OR UPPER("genre") LIKE UPPER('%' || $1 || '%') 
    OR UPPER("year") LIKE UPPER('%' || $1 || '%');`;
    console.log('in Search', req.params.search);
    pool.query(query, [req.params.search])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Search', err);
        res.sendStatus(500)
    })
});

module.exports = router;