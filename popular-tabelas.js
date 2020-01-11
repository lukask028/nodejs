const mysql = require('mysql');

const uriConnection = { 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'Loja'
};

const connection = mysql.createConnection(uriConnection);

connection.connect( function (err) {
    if (err)
    return console.log(err); console.log('conectou!');
});

function addRows(conn) {
const sql = "INSERT INTO usuarios(usuario, senha, status) VALUES ?";
const values = [['teste1', '123456', '1'] , ['teste2', '123456', '1'] , ['teste3', '123456', '1']];

conn.query(sql, [values], 
    function( error, results, fields) {
        if (error)
           return console.log(error);

           console.log('adicionou registros!');
    }
    );
}

addRows(connection);

connection.end(); 
