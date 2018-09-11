module.exports = function(app, db){
	 app.get('/api/add', function (req, res){
		 //localhost:3000/api/add?name=Super Mario&price=70.00&description=Save the princess!
	     const collection = db.collection('product');
		 //_id
		 var na = req.query.name;
		 var pri = req.query.price;
		 var des = req.query.description;
	     var myObj = {_id: 100, name:na, price:pri, description:des};
	     collection.insertOne(myObj , function(err, count){
		     if(err){
			     throw err;
		     }
			 res.send({'success':true});
		     console.log('Added product.'); 	 
	     });
	 });
};
