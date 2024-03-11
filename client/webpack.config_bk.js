const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack'); // Import dotenv-webpack
const ASSET_PATH = process.env.ASSET_PATH || '/';


module.exports ={
  mode: 'development',
	entry:'./src/js/index.js',
	output:{
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js',
    publicPath: ASSET_PATH,
	},
	devServer:{
    compress: true,
    open: true,
    port: 1954,
    hot: true,
	},
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
	plugins:[
		new HTMLWebpackPlugin({ template: './src/index.html'}),
    new Dotenv(),
	],
	module: {
		rules: [
			{ 
			test: /\.(js|jsx)$/, //manage .js and .jsx
			exclude: /node_modules/,
			use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] }}
			},
			{
			test:/\.(scss|css)$/, // manage .css and .scss
			use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
			test:/\.svg$/, //manage .svg file
			use:[{loader:'svg-url-loader', options:{limit:10000,}}]
			},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
		]
	}
}