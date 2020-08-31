module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'bookings',
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
            userId: {
                field: 'user_id',
                type: DataTypes.INTEGER(11),
                allowNull: false
            },
            source: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            destination: {
                type: DataTypes.STRING(100),
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
            tableName: 'bookings',
            timestamps: false
        }
    );
};
