const express =require('express') ;
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));
app.use(express.static('./views'))

app.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});