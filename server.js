const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var mysql = require('mysql');
var session = require('express-session');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'SAGS'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/telas/login.html'));
});*/


const db = require("./models");
//db.sequelize.sync();

//dropa a tabela toda vez que inicializa para modo de desenvolvimento
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao bezkoder application." });
});*/


//rota crud clientes
require("./routes/cliente.routes")(app);

//rota crud empresas
require("./routes/empresa.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});

app.get('./', function(request, response) {
	var email = request.body.email;
	var senha = request.body.senha;
	if (email && senha) {
		connection.query('SELECT * FROM sags WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
				response.redirect('/home');
			} else {
				response.send('Incorrect email and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});