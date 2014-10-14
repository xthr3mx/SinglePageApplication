var	Product = require('../models/product'),
	express = require('express'),
	router = express.Router();

router.route('/products')
	.get(function(req, res){
		Product.find(function(err, products){
			if(err){res.send(err);}
			res.json(products);
		});
	})
	.post(function(req, res){
		var product = new Product();
		
		// Set value of properties
		product.name=req.body.name;
		product.description=req.body.description;

		product.save(function(err){
			if(err){res.send(err);}
			res.json({message:'Product created.'});
		});
		
	});

router.route('/products/:id')
	.get(function(req, res){
		Product.findOne({_id: req.params.id}, function(err, product){
			if(err){return res.send(err);}
			res.json(product);
		});
	})
	.put(function(req, res){
		Product.findOne({_id: req.params.id}, function(err, product){
			if(err){return res.send(err);}
			
			// Set value of properties
			product.name=req.body.name;
			product.description=req.body.description;

			// save the data
			product.save(function(err){
				if(err){return res.send(err);}
				res.json({message: 'Product updated!'});
			});
		});		
		
	})
	.delete(function(req, res){
		Product.remove({_id: req.params.id}, function(err, product){
			if(err){return res.send(err);}
			res.json({message: 'Successfully deleted.'});
		})
	});
	

module.exports = router;