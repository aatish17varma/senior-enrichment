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
        allowNull: true,
        defaultValue: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/99.png"
    }
})