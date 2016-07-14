/*eslint-disable */
var path              = require( 'path' );
var webpack           = require( 'webpack' );
var autoprefixer      = require( 'autoprefixer' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var NodeBourbon       = require( 'node-bourbon' );


var NODE_ENV     = process.env.NODE_ENV || 'development';
var ENV          = process.env.npm_lifecycle_event; // npm task key name
var isProduction = ENV === 'build' || NODE_ENV === 'production';

const PATHS = {
    src: path.join( __dirname, 'src' ),
    dist: path.join( __dirname, 'dist' )
};

function webpackConfig() {

    var config = {};

    config.devtool = (isProduction ? 'cheap-module-source-map' : 'cheap-eval-source-map');
    config.context = path.join( __dirname, './src' );
    config.entry   = {
        js: [
            'app'
        ],
        vendor: [
            'react', 'react-dom', 'whatwg-fetch'
        ]
    };

    config.output = {
        path: PATHS.dist,
        publicPath: isProduction ? '/' : 'http://localhost:8080/',
        filename: isProduction ? '[name]-[hash:7].js' : 'bundle.js'
    };

    config.module = {
        // preLoaders: [
        //     {
        //         test: /\.jsx$|\.js$/,
        //         loader: 'eslint',
        //         include: PATHS.src,
        //         exclude: /dist\.js$/
        //     },
        //     {
        //         test: /\.jsx?$/,
        //         exclude: /(node_modules)/,
        //         loader: 'source-map'
        //     }
        // ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'babel',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            }, {
                test: /\.html$/,
                loader: 'html',
                query: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(eot|ttf|woff(2)?|svg|wav|mp3)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url?name=/files/[name]-[hash:7].[ext]&limit=8109'
            },
            { test: /\.png$/, loader: "url?limit=4000" },
            {
                test: /\.(ico|jpe?g|gif)$/i,
                loaders: [
                    'file?name=/images/[name]-[hash:7].[ext]&limit=81092'
                ]
            }
        ]
    };

    config.sassLoader = {
        includePaths: NodeBourbon.includePaths
    };

    config.postcss = [
        autoprefixer( {
            browsers: ['>1%', 'last 2 versions']
        } )
    ];

    config.plugins = [
        new webpack.optimize.CommonsChunkPlugin( {
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        } ),
        new webpack.LoaderOptionsPlugin( {
            minimize: true,
            debug: false
        } ),
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( NODE_ENV )
            },
            '__DEVTOOLS__': !isProduction
        } ),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin( 'style-[hash:7].css', {
            disable: false
            // allChunks: true
        } ),

        new HtmlWebpackPlugin( {
            template: './index.html',
            inject: 'body',
            filename: '../templates/index.html',
            minify: {
                removeAttributeQuotes: true
            },
            favicon: path.join( PATHS.src, 'common/images/favicon.png' )
            // chunks: ['app', 'vendor']
        } )
    ];

    if ( isProduction ) {
        // Set styles as external link
        config.module.loaders.push([
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!postcss!sass?sourceMap=true&sourceMapContents=true&outputStyle=expanded&' +
                    'includePaths[]=' + (path.resolve( __dirname, './node_modules' ))
                )
            },

            {
                test: /\.css/,
                loader: 'style!css!postcss'
            }
        ]);


        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin( {
                compress: {
                    warnings: false,
                    unsafe: true,
                    screw_ie8: true
                },
                comments: false,
                sourceMap: false
            } )
        )
    } else {
        // Set styles inline with hot reload
        config.module.loaders.push(
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            }
        );
    }

    config.resolve = {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.resolve( './src' ),
            'node_modules'
        ],
        alias: {
            'styles': path.resolve( __dirname, './src/common/scss' ),
            'common': path.resolve( __dirname, './src/common' )
        }
    };

    config.devServer = {
        contentBase: './src',
        historyApiFallback: true,
        inline: true,
        progress: true,
        port: 8080,
        hot: true,
        proxy: {
            '/api/*': 'http://127.0.0.1:8000'
        }
    };

    return config
}

module.exports = webpackConfig();
