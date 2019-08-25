# angular-foxdonut

[Contents](../README.md#angular-foxdonut)

# Using a CSS Framework

We'll use Bootstrap in this example.

## Install the framework

```
npm i -S bootstrap jquery popper.js
```

## Edit `angular.json`

Edit the `angular.json` file to add the CSS file to the `styles` array. Notice that our `styles.css`
file comes after so that we can override styles.

```javascript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

Next, add the jQuery and Bootstrap JavaScript files to `scripts`:

```javascript
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

Finally, use the CSS framework, i.e. add the `container` class on the outer div and use Bootstrap
components.

## &rarr; [Open the project](https://stackblitz.com/github/foxdonut/angular-foxdonut/tree/css-framework?file=angular.json)

[Contents](../README.md#angular-foxdonut)
