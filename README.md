This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# paris-js-0918-groupe8-react


## Branches

Pensez à faire un 
```
git checkout -b dev 
git push origin dev
``` 
pour initialiser votre `dev`.  

## React

La racine de votre repository doit avoir le dossier `public` et `src`, il ne faut pas que vous ayez un dossier avant.  

* Si vous avez _clone_ le projet et que vous avez fait un `create-react-app` à l'intérieur, pensez donc à remonter l'ensemble de vos dossiers dans le dossier parent. 
* Si vous n'avez pas _clone_ le projet, faites votre `create-react-app` et faites un `git remote add origin [url du repo]`. Vous aurez sûrement un `git pull` à faire avant votre premier _push_.

Poussez ce code sur une branche `start` et faites une _pull_ _request_ vers la branche `dev` pour que tout le monde parte de la même base. 




## Eslint 

Depuis la version 2 du `create-react-app`, il n'est désormais plus nécessaire d'installer eslint, tout est déjà disponible. 
Pour l'activer avec les conventions `Airbnb` il faut modifier le fichier `package.json` avec :

```
{
  
  ...

  "eslintConfig": {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [
        "js",
        "jsx"
      ]
    }
  },

  ...

}
```
