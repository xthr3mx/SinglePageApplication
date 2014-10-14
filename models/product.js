var	mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ProductSchema = new Schema({
		name: String,
		description: String
	});

module.exports = mongoose.model('Product',ProductSchema);