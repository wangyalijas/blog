'use strict';

module.exports = app => {
    const { INT, VARCHAR, TINYINT } = app.Sequelize;
    const Articles = app.model.define('articles', {
        id: INT,
        type_id: INT,
        title: VARCHAR,
        create_time: VARCHAR,
        update_time: VARCHAR,
        master_id: INT,
        count: INT,
        user_master: TINYINT,
        introduction: VARCHAR,
    })

    return Articles;
}