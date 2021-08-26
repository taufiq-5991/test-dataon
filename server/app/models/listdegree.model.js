module.exports = (sequelize, Sequelize) => {
  const Listdegree = sequelize.define("list_degrees", {
    degree_name: {
      type: Sequelize.STRING
    }
  });

  return Listdegree;
};
