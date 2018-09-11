const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/chatApp/')));
app.use(cors(corsOptions));

var corsOptions = {
     origin: 'http://localhost:4200',
     optionSuccessStatus: 200
};

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, client){
     if(err){
		 throw err;
	 } 
     console.log('Database created!');
	 const dbName = 'mydb';
	 const db = client.db(dbName);
	 //productID, name, price, type, description
	 require('./create.js')(app, db);
	 require('./add.js')(app, db);
	 require('./remove.js')(app, db);
	 require('./update.js')(app, db);
	 require('./read.js')(app, db);
	 require('./listen.js')(http); 
	 app.get('/api/products', (req, res) => {
		 var collection = db.collection('product');
		 collection.find({}).toArray(function (err, results){
			 if(err){
				 res.send(err);
			 } 
			 if(results.length){
				 res.send({'List': results, 'success': true});
			 } else{
				 res.send({'List':'','success': false});
			 }
		 });
	 });
});