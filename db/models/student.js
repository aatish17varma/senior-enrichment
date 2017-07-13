var db = require("../index");
var dataTypes = db.Sequelize;
module.exports = db.define("student", {
    name: {
        type: dataTypes.STRING(), 
        allowNull: false
    },
    email: {
        type: dataTypes.STRING(),
        allowNull: true
    },
    image: {
        type: dataTypes.STRING(),
        allowNull: false
    }
})