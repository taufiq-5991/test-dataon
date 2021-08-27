module.exports = (sequelize, Sequelize) => {
  const Applicanteducation = sequelize.define("applicant_educations", {
    school_name: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATEONLY
    },
    end_date: {
      type: Sequelize.DATEONLY
    },
    major: {
      type: Sequelize.STRING
    },
    grade: {
      type: Sequelize.DECIMAL(10, 2)
    },
    applicant_id: {
      type: Sequelize.INTEGER
    },
    degree_id: {
      type: Sequelize.INTEGER
    }
  });

  return Applicanteducation;
};
