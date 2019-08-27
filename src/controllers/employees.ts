/*import mysql from 'mysql';*/
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '35158aGgrem07!',
    database: 'test'
});

const searchEmployee = (method: string, request: any, response: any) => {
    let selectQuery = "SELECT * FROM ?? WHERE ?? LIKE '%" + request.query.search + "%'";
    let inserts = ['employees', 'name'];
    let query = mysql.format(selectQuery, inserts);

    connection.query(query, (err: string, rows: any, fields: any) => {
        if (err) {
            console.error("Failed to query for users: " + err);
            return;
        }

        let searchData = [];
        for (let i = 0; i < rows.length; i++) {
            searchData.push(rows[i]) //надо дработать с node database json
        }

        response.end(JSON.stringify(searchData));
    });
};

const employees = (method: string, request: any, response: any) => {
    const gender = request.query.gender;
    let querySearch = request.query.search;
    let queryString = `SELECT * FROM ?? WHERE ?? LIKE '%${querySearch}%' AND gender = ${gender}`;
    const inserts = ['employee', 'name'];
    const query = mysql.format(queryString, inserts);

    connection.query(query, (err: any, rows: any, fields: any) => {
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