const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// router.get
router.get("/movie", (req, res) => {
  const queryText = `SELECT * FROM movies ORDER BY id;`;
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

router.get("/genre", (req, res) => {
  const queryString = `SELECT "movies".id, array_agg("genres".name) as "genre" FROM "movies"
JOIN "movies_genres" ON "movies_genres".movies_id = "movies".id
JOIN "genres" ON "movies_genres".genres_id = "genres".id
GROUP BY "movies".id`;

  pool
    .query(queryString)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error completing SELECT genre query", err);
      res.sendStatus(500);
    });
});
// router.post

// router.put
router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const updatedDescription = req.body;
  console.log(updatedDescription);

  const queryText = `UPDATE movies SET  title =$1, description =$2 WHERE id=$3`;

  pool
    .query(queryText, [
      updatedDescription.title,
      updatedDescription.description,
      id,
    ])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing SELECT movies query", err);
      res.sendStatus(500);
    });
});

// router.delete

module.exports = router;
