## Pre requirements------------START

Download and Instal Node JS [Download](https://nodejs.org/en/download/)

Download and Instal Visual Studi Code Editor [Download](https://code.visualstudio.com/download)

Download and Instal React Devtool Extension in Chrome Browser [Download](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

Install (ES7+ React/Redux/React-Native snippets) extension on VS Code Editor

Install (Bracket Pair Color DLW) extension on VS Code Editor

## React Notes------------START

[React Official Documentation](https://reactjs.org/docs/create-a-new-react-app.html)

# Create React App

```
~$ npx create-react-app my-app
~$ cd my-app
~$ npm start
```

### Add node_modules base on project package.json and package-lock.json

```
~$ npm install
```

### Deploy React App
React App Reploy :  [Documentation](https://create-react-app.dev/docs/deployment/#github-pages)



```
~$ npm run build

//Deploy on Github
~$ npm i gh-pages --save-dev
or
~$ npm install --save gh-pages

//Add the following scripts in your package.json:
"homepage": "https://myusername.github.io/my-app",

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",

"scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",


//Now Run The Following Command
~$ npm run deploy
```
