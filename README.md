npm init  
npm start  
npm run start-server  
npm install nodemon --save-dev  
npm install nodemon --save
npm install nodemon -g
npm install
npm install --save body-parser
npm install --save express

## Types of Errors

- Syntax Errors
- Runtime Errors
- Logical Errors (the app not behavior correctly, no message error)

node.js debug  
F5, select node.js environment
lauch.json config
You have to install nodemon globally

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\app.js",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal"
    }
  ]
}
```
