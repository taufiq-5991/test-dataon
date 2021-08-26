module.exports = (sequelize, Sequelize) => {
  const Listposition = sequelize.define("list_positions", {
    position_name: {
      type: Sequelize.STRING
    }
  });

  return Listposition;
};
