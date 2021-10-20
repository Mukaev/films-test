const Sequelize = require("sequelize");
const sequelize = new Sequelize.Sequelize('ntfilms', 'mysql', null, {
    dialect: 'mysql',
    host: 'localhost'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.films = require("./film.js")(sequelize, Sequelize);

module.exports = db;