DROP DATABASE employee_structure_system;

CREATE DATABASE employee_structure_system;

USE	employee_structure_system;

----- TABLES ----

----- DEPARTMENT -----
CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

----- ROLE -----
CREATE TABLE emp_role(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);

----- EMPLOYEE -----
CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
	last_name VARCHAR(30),
    role_id INT,
    manager_id INT AUTO_INCREMENT,
    PRIMARY KEY(id),
    FOREIGN KEY(role_id) REFERENCES role(id)
);