# mac-cognito-integration

1. Create Cognito using Cloudformation
```
aws cloudformation create-stack --stack-name mac-cognito --template-body file://cloudformation/cognito.yml
```

2. Run API 
```
cd mac-bootapi
mvn spring-boot:run
```

3. Run Web app
```
cd mac-ngweb
ng serve
```