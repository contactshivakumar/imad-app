var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var data = [
    {
    "title":"article one",
    "message":"this is article one Sindhu Darling"
    },
    {
    "title":"article Two",
    "message":"this is article Two Sindhu Darling"
    },
    {
    "title":"article Three",
    "message":"this is article Three Sindhu Darling"
    }
];

function getHtmlMessage(data) {

var title=data.title;
var message=data.message;

var htmlMessage=`
    <html>
    <title>
        ${title}
    </title>
    <body>
        <div>
            <h1>${message}</h1>
        </div>
    </body>
</html>`
;
return htmlMessage;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function(req,res) {
   res.send(getHtmlMessage(data[0])) ;
});

app.get('/article-two', function(req,res) {
    res.send(getHtmlMessage(data[1])) ;
});

app.get('/article-three', function(req,res) {
    res.send(getHtmlMessage(data[2])) ;
});

app.get('/ui/main.js', function(req,res) {
    res.sendFile(path.join(__dirname,'ui','main.js'));
}); 
var counter=0

app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get("/submit-name", function(req,res) {
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
