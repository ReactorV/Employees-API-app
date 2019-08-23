//import mysql from 'mysql';
const mysql = require('mysql');

const employees = (method, request, response) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '35158aGgrem07!',
        database: 'test'
    });

    const queryString = "SELECT * FROM employees";

    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            response.end();
            return;
        }

        response.json(rows);
    });
};

export default employees;






/*app.use("/employees", function(request, response){

  response.sendFile(__dirname + "/pages/employees.html");
});

app.use("/employee/:id/overview", function(request, response){

  response.sendFile(__dirname + "/pages/employee-id-overview.html");
});

app.use("/employee/:id", function(request, response){

  response.sendFile(__dirname + "/pages/employee-id.html");
});

app.use("/", function(request, response){

  response.sendFile(__dirname + "/pages/home.html");
});*/