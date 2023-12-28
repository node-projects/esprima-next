import dts from "rollup-plugin-dts";

export default [{
    input: "dist/tsc/es/esprima.js",
    output: {
        file: "dist/esprima.js",
        format: "esm",
    },
    plugins: [],
},
{
    input: "dist/tsc/es/esprima.d.ts",
    output: [{ file: "dist/esprima.d.ts", format: "es" }],
    plugins: [dts()],
},
];
