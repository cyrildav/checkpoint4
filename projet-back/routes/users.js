const db = require("../db-config");
const userRoutes = require("express").Router();

userRoutes.post("/dispo", (req, res) => {
    const { email } = req.body;
    const { question } = req.body;
    db.query(
        "INSERT INTO user(email, question) VALUES (?, ?)",
        [email, question],
        (err,results) => {
            if (err) {
                console.log(err);
                res.status(500).send("c'est non !")
            } else {
                db.query(
                    "SELECT * FROM user WHERE id = ?",
                    [results.insertId],
                    (err, results) => {
                        if(err) {
                            console.log(err);
                            res.status(500).send("c'est non !");
                        } else {
                            res.status(201).json(results[0]);
                        }
                    }
                )
            }
        }
    )
})

module.exports = userRoutes;
