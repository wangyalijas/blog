'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1521016413535_5359';

  config.middleware = [];

  config.mysql = {
      clinet: {
          host: 'localhost',
          port: '3306',
          user: 'root',
          password: 'password',
          database: ''
      },
      app: true,
      agent: false
  }

  return config;
};
