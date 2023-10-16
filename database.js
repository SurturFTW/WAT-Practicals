const mysql = require('mysql');
// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'student',
    connectionLimit : 10
});
// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    } else {
        console.log('Connected to MySQL as id ' + connection.threadId);
    }
});
for (let i = 1; i <= 10; i++) {
    const student = {
        rollno: i,
        name: `student ${i}`,
        address: `Address ${i}`,
    };
connection.query('INSERT INTO student SET ?', student, (error, results) => {
    if (error) throw error;
    console.log(`Inserted student with ID: ${results.insertId}`);
    });
}
// Update a particular student's record
const updatedStudent = {
    name: 'Updated Student',
    address: 'Updated Address',
};
connection.query(
    'UPDATE student SET ? WHERE rollno = ?',
    [updatedStudent, 1],
    (error, results) => {
        if (error) throw error;
        console.log(`Updated ${results.affectedRows} row(s)`);
    }
);
// Delete a record (student with rollno 2)
connection.query('DELETE FROM student WHERE rollno = ?', 2, (error, results) => {
if (error) throw error;
    console.log(`Deleted ${results.affectedRows} row(s)`);
});
// Close the connection when done
connection.end((err) => {
    if (err) {
        console.error('Error closing the connection: ' + err.stack);
        return;
    }
console.log('MySQL connection closed.');
});
