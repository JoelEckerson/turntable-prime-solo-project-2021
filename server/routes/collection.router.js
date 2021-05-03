const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//router to get a user's records from collection and album table
router.get('/:id', (req, res) =>{
    const query = `SELECT "collection".id AS "collection_id", "collection".album_id, "collection".user_id, 
    "collection".comments, "collection".rating, "album".artist, "album".album, 
    "album".genre, "album".year, "album".image_url FROM "collection" 
    JOIN "album" ON "collection".album_id = "album".id
    WHERE "collection".user_id = $1 ORDER BY "collection".id DESC;`;
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

//router to post records into a user's collection
router.post('/', (req, res) => {
    console.log( 'in collection POST', req.body );
    const queryText = `INSERT INTO "collection" ( "album_id", "user_id") 
    VALUES ($1, $2 );`;
    pool.query(queryText, [req.body.id, req.body.user_id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
        console.log('Collection POST failed ', err);
        res.sendStatus(500);
    });
});

//router to update the star rating of a user's record
router.put('/:rating/:album_id/:user_id', (req, res) => {
    console.log( 'in collection PUT', req.params );
    const queryText = `UPDATE "collection" SET "rating" = $1 WHERE "album_id" = $2 AND "user_id" = $3;`;
    pool.query(queryText, [req.params.rating, req.params.album_id, req.params.user_id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
        console.log('Collection PUT failed ', err);
        res.sendStatus(500);
    });
});

//router to delete a record from a user's collection
router.delete('/:album_id/:user_id', (req, res) => {
    console.log( 'in collection DELETE', req.params );
    const queryText = `DELETE FROM "collection" WHERE "album_id" = $1 AND "user_id" = $2;`;
    pool.query(queryText, [req.params.album_id, req.params.user_id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
        console.log('Collection DELETE failed ', err);
        res.sendStatus(500);
    });
});

module.exports = router;