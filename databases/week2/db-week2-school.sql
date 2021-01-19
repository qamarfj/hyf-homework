/*Part 2: School database
Create a new database containing the following tables:
*/
SET NAMES utf8mb4;
CREATE DATABASE School;
USE School;

#Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE Class (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    begins DATE,
    ends DATE
);

#Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE Student (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    phone INT,
    class_id INT,
    CONSTRAINT FOREIGN KEY (class_id)
        REFERENCES Class (id)
);

#Create an index on the name column of the student table.
CREATE INDEX indx_name ON Student (name);

# Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished');