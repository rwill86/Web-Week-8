module.exports = function(app, db){
	 app.get('/api/find', (req, res) => {
		 //localhost:3000/api/find?name=Super Mario&price=70.00
		 const collection = db.collection('product');
	     var na = req.query.name;
		 collection.find({'name':na}).toArray(function (err, results){
			 if(err){
				 throw err;
			 } 
			 if(results.length){
				 res.send({'list': results,'success':true});
			 } else{
				 res.send({'list':'','success':false});
			 }		 
	     });
	 });
};