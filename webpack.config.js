const path = require('path');

module.exports = {
	entry: [
		path.resolve(__dirname, 'frontend/js/app.js')
	],
	output: {
		path: path.resolve(__dirname, 'server/public/scripts'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[{
			loader: "babel-loader",
			include: [
        		path.resolve(__dirname, 'frontend/js/*.js')
      	],	
			exclude: [
  				path.resolve(__dirname, "node_modules"),
			],	
			test: /\.jsx?$/,
			query: {
         	presets: ['es2015', 'react']
        	}
		}]	
	}

};

