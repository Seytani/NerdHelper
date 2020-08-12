module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define('topic', {
        name: 
        {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }) 
    Topic.associate = function(models) {
        Topic.hasMany(models.Question);
    }
    return Topic;
}