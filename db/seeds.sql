USE company_db;

INSERT INTO department(department_name) VALUES
('Management'),
('Human Resources'),
('Marketing'),
('Sales'),
('Customer Service');

INSERT INTO emp_role(title, salary, department_id) VALUES
('Manager', 170000, 1),
('Intern', 170000, 2),
('Sales Lead', 170000, 4),
('Salesworker', 170000, 4),
('Customer Clerk', 170000, 5),
('Service Manager', 170000, 1),
('Marketing Rep', 170000, 3),
('Communications', 170000, 3),
('Representative', 170000, 5);

INSERT INTO employee(first_name, last_name, role_id) VALUES
('Caitlyn', 'Griffing', 1),
('Kristopher', 'Avila', 1),
('Rylie', 'Mullins', 2),
('Kenzie', 'Patterson', 7),
('Bob', 'Lester', 5),
('Tom', 'Brady', 3),
('Rebecca', 'Fleece', 7),
('Geniveve', 'Garza', 5),
('Jaxzen', 'Crouch', 8),
('Claire', 'Collins', 6),
('Pheonix', 'Samson', 4);