/*Part 4: Creating a database
Using an entity relationship diagram, design the data model for an application of your choice. This can be anything, previous students have used a small business (with staff, offices, and job titles), a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).

Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

Next, using the entity relationship diagram as a starting point, write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model.

Submit an image or PDF of your entity relationship diagram, and a .sql file with the CREATE TABLE statements.*/
SET NAMES utf8mb4;
CREATE DATABASE WEB_PROJECTS;
USE WEB_PROJECTS;

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  salary INT NOT NULL,
  job_title VARCHAR(45) NULL,
  join_date DATE,
  phone VARCHAR(45) NULL,
  address VARCHAR(245) NOT NULL);
  
  CREATE TABLE client (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,  
  phone VARCHAR(45) NULL,
  email VARCHAR(100) NULL,
  address VARCHAR(245) NOT NULL);
  
  CREATE TABLE project (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(245) NOT NULL, 
  type VARCHAR(245) NOT NULL,
  description TEXT NULL,
  status VARCHAR(45) NOT NULL,
  client_id INT,
    FOREIGN KEY (client_id)
        REFERENCES client (id)
  );
  
CREATE TABLE employee_project (
    emplyee_id INT,
    project_id INT,
    FOREIGN KEY (emplyee_id)
        REFERENCES Employee (id),
    FOREIGN KEY (project_id)
        REFERENCES project (id),
        PRIMARY KEY (emplyee_id, project_id)
);