let express = require("express");
let app = express();

app.use('/img', express.static(__dirname + "/assets/img"));
app.listen(60000);