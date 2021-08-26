module.exports = (sequelize, Sequelize) => {
  const Applicantdata = sequelize.define("applicant_data", {
    fullname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    birth_date: {
      type: Sequelize.DATEONLY
    },
    status: {
      type: Sequelize.STRING
    },
    skills: {
      type: Sequelize.STRING
    },
    applied_position_id: {
      type: Sequelize.INTEGER
    }
  });

  return Applicantdata;
};
