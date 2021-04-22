const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) =>{
    const query = `SELECT * FROM "collection" 
    JOIN "album" ON "collection".album_id = "album".id;`;
    console.log('in collection', req.params.user_id);
    pool.query(query)
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Collection', err);
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;