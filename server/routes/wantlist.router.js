const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/*
 * GET route template
 */
 router.get('/:id', (req, res) =>{
    const query = `SELECT "wantlist".id AS "wantlist_id", "wantlist".album_id, "wantlist".user_id, 
    "wantlist".comments, "wantlist".rating, "album".artist, "album".album, 
    "album".genre, "album".year, "album".image_url FROM "wantlist" 
    JOIN "album" ON "wantlist".album_id = "album".id
    WHERE "wantlist".user_id = $1;`;
    console.log('in wantlist', req.params.id);
    pool.query(query, [req.params.id])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get wantlist', err);
        res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;