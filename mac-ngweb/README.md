# MacNgweb

## Errors
### amazon-cognito-identity-js causing `Uncaught ReferenceError: global is not defined`
1. Create aws.js 
    ```
    (window).global = window;
    ```
2. Add aws.js into angular.json
    ```
    "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/mac-ngweb",
        "index": "src/index.html",
        "main": "src/main.ts",
        "polyfills": [
          "zone.js",
          "src/aws.js"
        ],
    ```

#### References 
* https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8
* https://stackoverflow.com/a/52175667
