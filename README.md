# mac-cognito-integration

## Run

1. Create Cognito using Cloudformation
```
aws cloudformation create-stack --stack-name mac-cognito --template-body file://cloudformation/cognito.yml
```

2. Update config. 
  * Add value of `CognitoUserPoolId` and `CognitoWebClientId` from CloudFormation Output into `mac-ngweb\src\environments\environment.ts`
  * Add `https://cognito-idp.ap-southeast-1.amazonaws.com/{USER_POOL_ID}` into `mac-bootapi\src\main\resources\application.properties`

3. Run Web app
```
cd mac-ngweb
ng serve
```

5. Run API
```
cd mac-bootapi
mvn spring-boot:run
```

## Test Web client (Use amazon-cognito-identity-js for register and login)

1. Open http://localhost:4200/signup and try register
2. Open AWS Console and confirm user
3. Open http://localhost:4200/singin and try login 

## Test API client (Use Client credential flow for getting access_token)

1. Open App client `MacApiClient` in AWS web console. 
2. Click `Edit` button under Hosted UI and then click `Save changes`. (For some reasons we have to click `Save changes` button in order to get access_token without `invalid_grant` error)
3. Get access_token

```
curl --location --request POST 'https://macweb.auth.ap-southeast-1.amazoncognito.com/oauth2/token?grant_type=client_credentials&client_id={CLIENT_ID}&scope=https://localhost/macall' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic {BASE_64(CLIENT_ID:CLIENT_SECRET)}'

// https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html
```

4. Call API from resource server

```
curl --location --request GET 'http://localhost:8080/products' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'Cookie: JSESSIONID=18AA8D1213AD1C441AB9C9E9CB217AC7'
```