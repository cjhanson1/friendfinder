var express = require('express')
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 2000
var app = express()
var path = require("path")
var friends = require("./app/data/friends.js")
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
})
app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})
app.get('/friends', function (req, res) {
  res.sendFile(path.join(__dirname, "/app/data/friends.js"));
})
app.get('/api/friends', function (req, res){
	res.json(friends)
})
app.post('/api/friends', function (req, res){
	friends.push(req.body.friends)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT,function(){
	console.log("listening on port:"+PORT)
})