'use strict';
module.exports = (sequelize, DataTypes) => {
    const Tokens = sequelize.define('Tokens', {
        user_id: DataTypes.INTEGER,
        token: DataTypes.STRING,
        type: DataTypes.STRING
    }, {});
    Tokens.associate = function (models) {
        // associations can be defined here
    };
    return Tokens;
};
