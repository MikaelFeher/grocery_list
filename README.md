# Grocery List

A ReactJS grocery list application.

All the displayed text is in Swedish since that is the primary intended usergroup.

The application is built using `create-react-app` with the addition of:
- `react-router`
- `redux`
- `firebase`

The 'backend' is [Firebase](https://firebase.google.com/).

Feel free to clone the repo and run:
```
$ npm install
```
For security reasons the `firebase.js` file is NOT included in the repo, so you need to create that in the `/src` directory according to the instructions given by the firebase docs.

Since this version of the app is deployed live on my `gh-pages` the `homepage` part in `package.json` needs to be changed to whatever page you want to deploy to, or remove that reference altogether.

To run a development server locally:
```
$ npm start
```

To build for production:
```
$ npm run build
```
