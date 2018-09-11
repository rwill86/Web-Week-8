module.exports = function(app, db){
	     app.get('/api/remove', (req, res) => {
	     const collection = db.collection('product');
		 var i = req.query.id;
		 //var i = req.params.id;
	     var productID = {'name': i};
	     collection.deleteOne(productID, function(err, count){
		     if(err){
		         throw err;
		     }			 
			 if(count.result.n > 0){
				 res.send({'success':true});
				 console.log('deleted product');
			 } else{
				 res.send({'success':false});
			 }
	     });
	 });
};

