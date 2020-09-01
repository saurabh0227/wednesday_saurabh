module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'cabLocations',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            cabId: {
                field: 'cab_id',
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            latitude: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            longitude: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            }
        },
        {
            tableName: 'cabLocations',
            timestamps: false
        }
    );
};
