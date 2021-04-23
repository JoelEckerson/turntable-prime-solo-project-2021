const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) =>{
    const query = `SELECT "collection".id AS "collection_id", "collection".album_id, "collection".user_id, 
    "collection".comments, "collection".rating, "album".artist, "album".album, 
    "album".genre, "album".year, "album".image_url FROM "collection" 
    JOIN "album" ON "collection".album_id = "album".id
    WHERE "collection".user_id = $1;`;
    console.log('in collection', req.params.id);
    pool.query(query, [req.params.id])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Collection', err);
        res.sendStatus(500)
    })
});


router.post('/', (req, res) => {
    const queryText = `INSERT INTO "collection" ( "album_id", "user_id", "comments", "rating") 
    VALUES ($1, $2, $3, $4 )`;
    pool.query(queryText, [req.body.album_id, req.body.user_id, req.body.comments, req.body.rating])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('Collection POST failed ', err);
        res.sendStatus(500);
    });
});

module.exports = router;