# Steps
## 1st commands
npm -y init
npm install cypress

## 1st actions
Create a .gitignore and add node_modules
Create a README.md file

## 2nd commands
git init
git branch -M main
git add .
git commit -m "First commit"
git remote add origin git@github.com:ArnaudAM/Cypress_Quest4.git

## 3rd commands to install downloadfiles and using url
npm install --save-dev cypress-file-upload
npm install --save-dev cypress-downloadfile

## 2nd actions
npx cypress open
Then that create cypress folder and cypress.json

## 4t commands to install reports and use it
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npx cypress run
npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
npx marge mochawesome.json
