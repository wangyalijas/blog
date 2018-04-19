'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客前台系统
  router.get('/', controller.render.index.home);
};
