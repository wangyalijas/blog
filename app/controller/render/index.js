'use strict';
const Controller = require('egg').Controller;

class IndexController extends Controller {
// 主页面渲染
    async home () {
        const { ctx } = this;
        const resourceData = {};

        const articles = await ctx.service.article.findAll(1, 5);

        resourceData.articles = articles.rows;
        resourceData.config = ctx.app.config.renderData;

        // await ctx.render('page/tean/home.tpl', { resourceData });

    }
}