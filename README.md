**use**: ['style-loader', 'css-loader'] - here the order is important and it runs from right to left. It's gonna use the css-loader to collect the css from the css file and then we use that style-loader to add css to the html document

**css-loader** loads the CSS into our JS file
**style-loader** adds our css into the DOM

# These are for async/await
"@babel/plugin-transform-runtime": "^7.17.0",
"@babel/runtime": "^7.17.8",

**RUN COMMANDS**:
```diff
! npm i
! npm run dev (during development)
! npm run build (at the end for production, creates bundle.js, and makes copy of dist into build folder)
! npm run zip (for creating .zip file from build folder)
```

# NOTE: run the command: npm run build, two times, because of asynchronous task for creating bundle.js. The second time is needed after the coping task for build folder, for coping the bundle.js from dist to build (minimized)

npm install --save-dev npm-build-zip 
in package.json added in scripts: "zip": "npm-build-zip"

[externals](https://webpack.js.org/configuration/externals/)
[build-zip](https://www.npmjs.com/package/npm-build-zip/v/1.0.0)
[copy](https://www.npmjs.com/package/copy-webpack-plugin)
[terser](https://www.npmjs.com/package/terser-webpack-plugin)
[html-minimizer](https://www.npmjs.com/package/html-minimizer-webpack-plugin)