CREATE DATABASE student;
USE student;
CREATE TABLE students (
    rollno INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);

select * from students;
