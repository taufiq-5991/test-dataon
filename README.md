# CV Drop App
This application is for job applicants to drop their CVs, also features an admin module to sort out applicants' suitability.

## Technologies Used
- Front-End: Ember.js
- Back-End: Node.js
- Database: MariaDB

## Instruction to deploy locally
Front-end
- Execute "npm install" on client-applicant folder
- To run & connect to local back-end, execute "ember s --proxy http://localhost:8080"

Back-end
- Execute "npm install" on server folder
- To run, execute "node server.js" on server folder. This will run at port 8080

Database
- Paste the entire content of mysql_data.sql to MySQL query

## Application Workflow
There are separate front-ends for applicants & HR admin

For Applicants
- Applicant fills out CV form consisting of their personal data, working experience, skills, education, and desired position.
- Applicant submits their finished CV form, and receives an email notifying that their application has been submitted.
- Applicant waits for the admin to make the decision, and later they will receive a notification email when their application is accepted or rejected.

For HR Admin
- HR Admin can view a list of submitted CVs.
- HR Admin can choose between accepting or rejecting the CV, which will automatically email the decision to the applicant.

