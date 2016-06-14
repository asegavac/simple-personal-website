var path = require("path");


module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "./dist/build.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"],
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread",
                        "add-module-exports"
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};
