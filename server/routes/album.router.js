const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/artist', (req, res) =>{
    const query = `SELECT * FROM "album" WHERE artist=$1`;
    console.log('in album artist', req.params.artist);
    pool.query(query, [req.params.artist])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Album Artist', err);
        res.sendStatus(500)
    })
});

router.get('/album', (req, res) =>{
    const query = `SELECT * FROM "album" WHERE album=$1`;
    console.log('in album album', req.params.album);
    pool.query(query, [req.params.album])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Album Album', err);
        res.sendStatus(500)
    })
});

router.get('/:genre', (req, res) =>{
    const query = `SELECT * FROM "album" WHERE genre=$1`;
    console.log('in album genre', req.params.genre);
    pool.query(query, [req.params.genre])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Album Genre', err);
        res.sendStatus(500)
    })
});

router.get('/year', (req, res) =>{
    const query = `SELECT * FROM "album" WHERE year=$1`;
    console.log('in album year', req.params.year);
    pool.query(query, [req.params.year])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Album Year', err);
        res.sendStatus(500)
    })
});

router.get('/', (req, res) =>{
    const query = `SELECT * FROM "album"`;
    console.log('in album all');
    pool.query(query)
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: Get Album Artist', err);
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