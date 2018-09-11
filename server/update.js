module.exports = function(app, db){
	 app.get('/api/update', (req, res) => {
	     const collection = db.collection('product');
		 var i = req.query.id;
		 //var i = req.params.id;
		 var productID = {'name':i};
		 var newvalues = { $set: {name: 'Halo', price: '99.99', description:'A boring game'}};	 
	     collection.updateOne(productID, newvalues, function(err, count){
		     if(err){
			     throw err;
		     }
			 if(count.result.n > 0){
				 res.send({'success':true});
				 console.log('product updated.');
			 } else{
				 res.send({'success':false});
			 }
	     });
	 });
};