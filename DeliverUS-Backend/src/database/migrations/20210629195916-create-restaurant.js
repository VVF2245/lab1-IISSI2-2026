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
        type: Sequelize.String,
        allowNull: true
      },
      address: Sequelize.String,
      postalCode: Sequelize.String,
      url: {
        type: Sequelize.String,
        allowNull: true
      },
      shippingCosts: Sequelize.Float,
      averageServiceMinutes: {
        type: Sequelize.Float,
        allowNull: true
      },
      email: {
        type: Sequelize.String,
        allowNull: true
      },
      phone: {
        type: Sequelize.String,
        allowNull: true
      },
      logo: {
        type: Sequelize.String,
        allowNull: true
      },
      heroImage: {
        type: Sequelize.String,
        allowNull: true
      },
      status: Sequelize.Enum('online', 'offline', 'closed', 'temporarily closed')
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
