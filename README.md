# mac-cognito-integration

1. Create Cognito using Cloudformation
```
aws cloudformation create-stack --stack-name mac-cognito --template-body file://cloudformation/cognito.yml
```

2. Update Web app config. Copy `cognitoUserPoolId` and `cognitoAppClientId` from CloudFormation into `src\environments\environment.ts`

3. Run Web app
```
cd mac-ngweb
ng serve
```

4. Run API (Optional) 
```
cd mac-bootapi
mvn spring-boot:run
```
