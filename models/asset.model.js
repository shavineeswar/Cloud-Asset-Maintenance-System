module.exports = (sequelize, Sequelize) => {
    const AssetMaintenance = sequelize.define("assetmaintenance", {
        assetType: {
            type: Sequelize.STRING
        },
        assetId: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },

        location: {
            type: Sequelize.STRING
        },

        maintenance1: {
            type: Sequelize.STRING
        },
        maintenance2: {
            type: Sequelize.STRING
        },
        maintenance3: {
            type: Sequelize.STRING
        },

        type: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },

        department: {
            type: Sequelize.STRING
        },

        responsiblePerson: {
            type: Sequelize.STRING
        },
    });

    return AssetMaintenance;
};