# ReadIt
OCR-Tool

## Requirements
This entire Project uses [Node.js](https://nodejs.org/en/download "Node.js"), please make sure Node.js is installed correctly by running node -v inside the commandline.
Visual Studio as IDE is also Suggested.
## Backend
### Setup
The entire backend is inside the readit-server directory. Open the commandline inside the root of the readit-server directory and run ```npm install``` (or ```yarn``` if prefered) to install the dependencies.
After the installation process is complete run ```npm start``` to start the server. If no errors are returned, the server is successfully running at ```http://localhost:3000```

## Frontend
### Setup
The entire frontend is inside the readit-client directory. Open the commandline inside the root of the readit-server directory and run ```npm install``` (or ```yarn``` if prefered) to install the dependencies.
To install Vue run ```npm install -g @vue/cli``` or ```yarn global add @vue/cli```
#### Developmend mode
Run ```npm run serve``` to start the Client in development mode. In this mode, the app will be rendered each time there are changes in the code. If initializied correctly, the Website can be accessed at ```http://localhost:8080```
#### Build project
Run ```npm run build``` to build the Code. The code gets now built into vanilla html / js / css code. The built version is now in the ```dist/``` directory and can be hosted on an FTP-Server. To run the Website install serve with ```npm install -g serve``` and deploy it with ```serve -s dist```
