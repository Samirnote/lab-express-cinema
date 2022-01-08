const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((Resp) => {
      res.render("movies.hbs", {
        movies : Resp,
      });
    })
    .catch((e) => console.error(e));
});

router.get('/movies/:id/details', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((Resp) => {
      res.render("details.hbs", {
        moreDetails : Resp,
      });
    })
    .catch((e) => console.error(e));
});
    

module.exports = router;
