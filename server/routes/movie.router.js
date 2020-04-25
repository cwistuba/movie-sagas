const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// router.get
router.get("/", (req, res) => {
  const queryText = "SELECT * FROM movies";
  pool
    .query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

// router.post

// router.put

// router.delete

module.exports = router;
