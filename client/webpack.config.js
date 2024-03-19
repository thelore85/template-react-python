const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack'); // Import dotenv-webpack


module.exports ={
  mode: 'development',
	entry:'./src/js/index.js',
	output:{
		path: path.join(__dirname, '/dist'),
    publicPath: '/',
		filename: 'bundle.js',
	},
	devServer:{
    compress: true,
    open: true,
    port: 1954,
    hot: true,
	},
	plugins:[
		new HTMLWebpackPlugin({ template: './src/index.html'}),
    new Dotenv(),
    new ESLintPlugin({ extensions: ['.js', '.jsx'], context: 'src' }),
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
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.svg$/, //manage .svg file
        exclude: /node_modules/,
        use:[{loader:'svg-url-loader', options:{limit:10000,}}]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
		]
	},
  resolve: {
    extensions:['.jsx','.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
}