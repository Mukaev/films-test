module.exports = app => {
    const films = require("../controllers/film");
    var router = require("express").Router();

    router.post("/", films.create);

    router.get("/", films.findAll);

    router.get("/:id", films.findOne);

    router.patch("/:id", films.update);

    router.delete("/:id", films.delete);

    app.use('/api/films', router);
}