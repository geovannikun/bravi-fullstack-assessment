let express = require('express');
let app = express();
let path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8080, () => {
    console.log("Running at port 8080");
})