const express = require("express");
const app = express();
const PORT = 3000;
const logRoutes = require("./routes/logRoutes");
const methodOverride = require("method-override");
require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get("/", (req, res)=>{res.redirect("/logs");})
app.use("/", logRoutes);

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})