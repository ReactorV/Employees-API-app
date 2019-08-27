/*import mysql from 'mysql';*/
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '35158aGgrem07!',
    database: 'test'
});

const employees = (method: string, request: any, response: any) => {
    const gender = request.query.gender;
    let querySearch = request.query.search;
    const likeQuerySearch = `'%${querySearch}%'`;
    const employeeRow = 'employee.employeeID';
    const addressRow = 'address.employeeID';

    let queryString = `SELECT * FROM ?? WHERE ?? LIKE ${likeQuerySearch} AND ?? = ? AND ?? = ??`;
    const inserts = [['employee','address'],'name','gender', gender, employeeRow, addressRow];

    const query = mysql.format(queryString, inserts);
    console.log(query);
    connection.query(query, (err: any, rows: any, fields: any) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            response.end();
            return;
        }

        const employees = rows.map((row: any) => {
            return {
                ID: row.employeeID,
                name: row.name,
                position: row.position,
                gender: row.gender,
                address: row.address
            }
        });

        response.json(employees);
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