module.exports = (sequelize, Sequelize) => {
  const Applicantexperience = sequelize.define("applicant_experiences", {
    company_name: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    summary: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATEONLY
    },
    end_date: {
      type: Sequelize.DATEONLY
    },
    applicant_id: {
      type: Sequelize.INTEGER
    }
  });

  return Applicantexperience;
};
