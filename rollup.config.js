import dts from "rollup-plugin-dts";

export default [{
    input: "dist/tsc/es/esprima.js",
    output: {
        file: "dist/esm/esprima.js",
        format: "esm",
    },
    plugins: [],
},
{
    input: "dist/tsc/es/esprima.d.ts",
    output: [{ file: "dist/esm/esprima.d.ts", format: "es" }],
    plugins: [dts()],
},
];
