const express =  require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 9000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./router');
app.use('/', router); 
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(port, () => {
  console.log("listening on port: " + port);
})