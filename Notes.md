Episode 1: Inception
    - create aindex.html file
    - create html boiler plate => html:5
    - hello world in html, js, react
    - get react using cdn
    - createRoot, createElement => creating react elements without JSX
    - React element is just an object

Episode 2: Igniting our app
    - Create a public repo in github
    - git init
    - diff b/w git & github
    - to create prod reacy code, below are required
        o images size to be reduced
        o scripts minified
        o files bundled
        o code splitting
        o optimization
    - npm - there is no full form (check in npmjs.com)
    - create a new package.json with npm insatll
        o npm init
    - add the most important packag e in aproject - bundler
        o webpack, parcel, vite
        o CRA used webpack on the background
    - In this app, parcel is used
    - parcel is used to bundle the files
        o npm install -D parcel
        o -D for dev dependency as the bundling happens in dev only 
        o there are two types of dependencies
            - dev dependency
            - normal dependency (prod)
        o while adding versions there are two symbols:
            - ^ caret (upgrades to minor versions)
            - ~ tilda (upgrades to major versions)
    - why package-lock.json
        o to lock the versions, keep the track of exact versions
    - node modules
        o it contains all the code of all the dependencies
        o transfer of dependencies - thats why just by installing one dependency we got a lot of folders in node modules
        o every package inside node module will have a package.json
    -  .gitignore
        o ignore all unnecessary files created in prod push
    - gettig react as a npm not through cdn
*   - createRoot moved from "react-dom" to "react-dom/client" in version 19
*   - package.json - browserList, dependencies, 

Episode 3: Laying the foundation
    - scripts in package.json for start and build
    - we can write react without JSX, but jsx makes it easy
    - can browsert understand jsx? No, it needs to be transpiled
    - parcel does the transpiling using Babel which js engine can understand
    - jsx attribute names are camelCase
    - Useful extensions - bracket colorization, eslint, prettier, 
    -  what is a component? class & functional
    -  what is component composition? - using components inside components
    - jsx prevents cross site scripting attack - how? - by not allowing html tags - it sanitizes the html
    - what make the code readable? - jsx

Episode 4: talk is cheap, show me the code (food ordering app building)
    - for creating app - start with designing and planning
    - low level details - what components are required, how they are connected
    - component composition  - nesting component inside component