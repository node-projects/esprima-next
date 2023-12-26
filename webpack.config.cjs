module.exports = {
    entry:  __dirname + "/dist/tsc/cjs/esprima.js",
    output: {
        path:  __dirname + "/dist",
        filename: "esprima.cjs",
        libraryTarget: "umd",
        library: "esprima",
        globalObject: 'this'
    }
}
