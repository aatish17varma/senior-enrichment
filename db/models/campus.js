var db = require("../index");
var dataTypes = db.Sequelize;

module.exports = db.define("campus", {
    name:{
        type: dataTypes.STRING(),
        allowNull: false
    },
    image: {
        type: dataTypes.STRING(),
        allowNull: true
    },  
})