const sequelize = require('../Database/connection');

function modelSync() {
  sequelize.sync();
}

module.exports = modelSync;
