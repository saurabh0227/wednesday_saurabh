module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'cabs',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            regsNumber: {
                field: 'regs_number',
                type: DataTypes.STRING(32),
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
            tableName: 'cabs',
            timestamps: false
        }
    );
};
