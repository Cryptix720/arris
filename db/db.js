import Sequelize from "sequelize";

const config = require("./libs/config.js");
let sequelize = null;

module.exports = () => {

if(!sequelize){
	sequelize = new sequelize(
	config.database,
	config.username,
	config.password,
	config.host,
	config.params
	);
	
}
return sequelize;
};