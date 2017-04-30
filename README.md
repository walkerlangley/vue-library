# vue-library

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Running with go server
- Clone down github.com/walkerlangley/basic-go-server and start server
  - `$ git clone git@github.com:walkerlangley/basic-go-server.git`
  - `$ go get github.com/tools/godep`
  - `$ godep save`
  - `$ go build && go run server.go`
  
- Start vue app which will launch the app in your browser
  - `$ npm start`
- The vue app will be a super basic login page
- Open the console and look at the network tab
- The username is `user` and the password is `test`
- The options to the login endpoint (http://localhost:3000/login) returns a 200 but the follow-up post is cancelled
- Looking at chrome://net-internals/#events for the above endpoint doesn't provide any insights that I can see
  
