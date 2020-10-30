This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Overview
### Dashboard / Landing Page with all sales and sales data
![Landing Page](https://github.com/coryclemens/MERN-ExpenseTracking/blob/master/readme_img/Ex_Pense%20Landing.PNG)

### Add Page to post request to API and add records to MongoDB
![Add Page](https://github.com/coryclemens/MERN-ExpenseTracking/blob/master/readme_img/Ex_Pense%20Add.PNG)

## Available Scripts

### `npm install`

Installs all dependencies.

### `npm run serve`

Starts serving the REST API 'node server' backend on local machine 

### `npm run client`

Launches the React app in development mode. App will refresh upon file changes.

### `npm run dev`

Runs both of the above scripts at the same time using `concurrently` package


## Connecting to your MongoDB cluster via config/config.env

Modify the URI environment variable to your MongoDB token

```javascript
NODE_ENV   = development
PORT       = 5000
URI        = ""  //insert mongoDB connection URI here.. Old commit data key is obselete FYI
IP         =  localhost
CLIENT_URI = "http://localhost:5000"
```
 With the object set up in MongoDB as
 
![MongoDB Object](https://github.com/coryclemens/MERN-ExpenseTracking/blob/master/readme_img/Ex_Pense%20Mongo.PNG)
 
 


