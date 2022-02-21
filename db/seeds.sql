USE employee_structure_system;

INSERT INTO department (name) VALUES
('Management'),
('Human Resources'),
('Marketing'),
('Sales'),
('Customer Service');

INSERT INTO emp_role (title, salary, department_id) VALUES
('Manager', 170000, 1),
('Intern', 170000, 1),
('Sales Lead', 170000, 3),
('Salesworker', 170000, 1),
('Customer Clerk', 170000, 1),
('Service Manager', 170000, 1),
('Marketing Rep', 170000, 4),
('Communications Manager', 170000, 1),
('Representative', 170000, 2);

INSERT INTO employee (first_name, last_name, emp_role_id) VALUES
('Caitlyn', 'Griffing', 1),
('Kristopher', 'Avila', 1),
('Rylie', 'Mullins', 1),
('Kenzie', 'Patterson', 1),
('Bob', 'Lester', 1),
('Tom', 'Brady', 1),
('Rebecca', 'Fleece', 1),
('Geniveve', 'Garza', 1),
('Jaxzen', 'Crouch', 1),
('Claire', 'Collins', 1),
('Pheonix', 'Samson', 1);