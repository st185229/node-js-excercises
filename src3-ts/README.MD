# NodeJS - Migrating to typescript from java script

This gist provide quick overview of how to migrate a Node JS project from JS to typescript , also some general guidelines=

## Steps

1. Look at the project structure
1. Decide whether to migrate all at once or file-by-file.
1. Add Typescript to each service if project uses microservice architecture.
1. For monolithic architecture, move to a src/dist to keep working files separate from complied Javascript.
1. Check if this affects any of the other paths within the project, as they might not be automatically updated (although most IDEs do).
1. If it doesn't automatically update, you can use a path module.
1. To exclude folders you don't want to be migrated, utilize the configuration file.
1. By setting allowJS to true in the config file, you. can follow the following approaches:

- Work for nested files to main files
  - Use file extension to track which files are migrated
  - Fewer errors in the console and IDE
- Work from main files to nested:
  - Main parts migrated first
  - More errors in console and IDE
- Update all files to .ts
  - Code will compile, but run with errors.

## details

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
