module.exports = {
    //Monitor Orden De Compra Interna
    entry: "./src/index.js",
    output: {
        path: __dirname + "/files/static/javascript",
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    resolve: {
        extensions: ["*", ".js", ".vue", ".jsx", ".json"]
    }
}