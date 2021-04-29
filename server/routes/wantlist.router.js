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

router.post('/', (req, res) => {
    console.log( 'in wantlist POST', req.body );
    const queryText = `INSERT INTO "wantlist" ( "album_id", "user_id") 
    VALUES ($1, $2 );`;
    pool.query(queryText, [req.body.id, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('wantlist POST failed ', err);
        res.sendStatus(500);
    });
});

router.delete('/:album_id/', (req, res) => {
    console.log( 'in wantlist DELETE', req.params );
    const queryText = `DELETE FROM "wantlist" WHERE "album_id" = $1 AND "user_id" = 1;`;
    pool.query(queryText, [req.params.album_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('wantlist DELETE failed ', err);
        res.sendStatus(500);
    });
});

module.exports = router;