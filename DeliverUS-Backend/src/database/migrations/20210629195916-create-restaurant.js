module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // TODO: Include the rest of the fields of the Restaurants table
      name: Sequelize.STRING,
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      address: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      restaurantCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        }
      },
      shippingCosts: Sequelize.DOUBLE,
      averageServiceMinutes: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      heroImage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: Sequelize.ENUM('online', 'offline', 'closed', 'temporarily closed')
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
