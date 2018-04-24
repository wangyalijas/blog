'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1521016413535_5359';

  config.middleware = [];

  config.sequelize = {
      dialect: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: 'password',
      database: '',
  }

  return config;
};
