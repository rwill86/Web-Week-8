module.exports = function(app, db){
	 app.get('/', (req, res) => {
	     db.createCollection('product' , function(err, count){
	         if(err){
		        throw err;
		     }
		     console.log('Collection created.');
		     res.send({'success':true});
         });
     });	 
};
