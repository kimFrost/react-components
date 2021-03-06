import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
//import postcss from 'rollup-plugin-postcss';
import postcss from 'rollup-plugin-postcss-modules';
import resolve from "rollup-plugin-node-resolve";


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
        ...Object.keys(pkg.peerDependencies || {}),
        ...Object.keys(pkg.dependencies || {})
    ],
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        postcss({
            extract: false,
            writeDefinitions: true,
            modules: {
                generateScopedName: "[local]___[hash:base64:4]__" + pkg.version
            },
            use: ['sass']
            //extensions: ['.module.scss']
        }),
        typescript({
            typescript: require('typescript'),
        }),

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
        //resolve(),

    ]
};