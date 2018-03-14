'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        let { ctx } = this
        ctx.body = ctx.params.id;
    }
}

module.exports = ArticleController;