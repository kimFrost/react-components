import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
//import postcss from 'rollup-plugin-postcss';
import postcss from 'rollup-plugin-postcss-modules';
//import resolve from "rollup-plugin-node-resolve";

export default {
    input: 'src/index.ts', // our source file
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es' // the preferred format
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),

        //resolve(),

        // commonjs({
        //     include: ["node_modules/**"],
        //     namedExports: {
        //         "node_modules/react/react.js": [
        //             "Children",
        //             "Component",
        //             "PropTypes",
        //             "createElement"
        //         ],
        //         "node_modules/react-dom/index.js": ["render"]
        //     }
        // }),
        terser(), // minifies generated bundles
        postcss({
            extract: false,
            writeDefinitions: true,
            modules: true,
            use: ['sass'],
            //extensions: ['.module.scss']
        }),
    ]
};