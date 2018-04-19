'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
    async findAll(page, size) {
        const {ctx} = this;
        let result = {};
        if (page && size) {
            result = await ctx.model.Article.foundAndCountAll({

            })
        }
        return result;
    }
}