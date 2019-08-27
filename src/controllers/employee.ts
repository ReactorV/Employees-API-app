/*import mysql from 'mysql';*/
const mysql = require('mysql');

const employee = (method: string, request: any, response: any) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '35158aGgrem07!',
        database: 'test'
    });

    const userId = request.params.id;
    const queryString = `SELECT * FROM employees WHERE id LIKE '${userId}';`;

    connection.query(queryString, [userId], (err: any, rows: any, fields: any) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            response.end();
            return;
        }

        response.json(rows);
    });
};

export default employee;
