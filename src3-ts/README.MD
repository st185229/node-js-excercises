# details

- create src folder and move js file to ts file and rename to .ts
- npm init -y
- npm i --save-dev typescript
- npm i --save-dev ts-node
- npm i --save-dev @types/node
- npx tsc --init
- replace the script in file package.json

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
  Replace with 
  
   "scripts": {
    "build": "npx tsc"
  },

```

- Go to tsconfig.json
```
--
"target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
"module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
"lib": ["ES6"],    

--
--
"outDir": "./build",
---
---
"strict": true,  
"noImplicitAny": true,
--
--

/* Advanced Options */
"skipLibCheck": true,                     /* Skip type checking of declaration files. */
"forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
},
"exclude": ["node_modules"],
```
- npm run build
