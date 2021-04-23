const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:search', (req, res) =>{
    const query = `SELECT * FROM "album" 
    WHERE "artist" LIKE '%' || $1 || '%' 
    OR "album" LIKE '%' || $1 || '%' 
    OR "genre" LIKE '%' || $1 || '%' 
    OR "year" LIKE '%' || $1 || '%';`;
    console.log('in collection', req.params.search);
    pool.query(query, [req.params.search])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Collection', err);
        res.sendStatus(500)
    })
});

module.exports = router;