
CREATE TABLE applicant_data (
    id integer NOT NULL AUTO_INCREMENT,
	createdAt datetime,
    updatedAt datetime,
    fullname text,
    email text,
    phone text,
    address text,
    birth_date date,
    status text,
    skills text,
    applied_position_id integer,
	PRIMARY KEY (id)
);

CREATE TABLE applicant_educations (
    id integer NOT NULL AUTO_INCREMENT,
	createdAt datetime,
    updatedAt datetime,
    school_name text,
    start_date date,
    end_date date,
    major text,
    grade decimal(10,2),
    applicant_id integer,
    degree_id integer,
	PRIMARY KEY (id)
);

CREATE TABLE applicant_experiences (
    id integer NOT NULL AUTO_INCREMENT,
	createdAt datetime,
    updatedAt datetime,
    company_name text,
    summary text,
    position text,
    start_date date,
    end_date date,
    applicant_id integer,
	PRIMARY KEY (id)
);

CREATE TABLE list_degrees (
    id integer NOT NULL AUTO_INCREMENT,
	createdAt datetime,
    updatedAt datetime,
    degree_name text,
	PRIMARY KEY (id)
);


CREATE TABLE list_positions (
    id integer NOT NULL AUTO_INCREMENT,
	createdAt datetime,
    updatedAt datetime,
    position_name text,
	PRIMARY KEY (id)
);

INSERT INTO applicant_data VALUES (1, now(), now(), 'Budi Gunardi', 'budi_gunawan@hotmail.com', '08124235234', 'BSD', '1990-10-02', 'PENDING', 'Microsoft Office, HRIS, Accounting, Psychology', 6);

INSERT INTO applicant_educations VALUES (1, now(), now(), 'Universitas Pelita Harapan', '2009-06-10', '2013-07-23', 'Psikologi', 3.00, 1, 3);

INSERT INTO applicant_experiences VALUES (1, now(), now(), 'PT. Anabatic', 'Managing new applicants, providing administrative functions and psychological support to current workers.', 'HR Admin', '2009-06-10', '2013-07-23', 1);

INSERT INTO list_degrees VALUES (1, now(), now(), 'SMA/SMK');
INSERT INTO list_degrees VALUES (2, now(), now(), 'D3');
INSERT INTO list_degrees VALUES (3, now(), now(), 'S1');
INSERT INTO list_degrees VALUES (4, now(), now(), 'S2');
INSERT INTO list_degrees VALUES (5, now(), now(), 'S3');

INSERT INTO list_positions VALUES (1, now(), now(), 'Web Developer');
INSERT INTO list_positions VALUES (2, now(), now(), 'Software QA Tester');
INSERT INTO list_positions VALUES (3, now(), now(), 'Mobile Developer');
INSERT INTO list_positions VALUES (4, now(), now(), 'Database Administrator');
INSERT INTO list_positions VALUES (5, now(), now(), 'Project Manager');
INSERT INTO list_positions VALUES (6, now(), now(), 'HR Officer');
INSERT INTO list_positions VALUES (7, now(), now(), 'Customer Service');