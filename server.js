const fs = require("fs");
// const http = require("http");
const express = require("express");

const app = express();

// default url = healt check
app.get('/', (req, res) => {
    res.status(200).json({
        "status" : "Success",
        "message " : "Application is running good...."
    })
})

app.get('/zainal', (req, res) => {
    res.status(200).json({
        "message " : "ping succesfuly"
    })
})

// middleware / handler url yang tidak dapat diakses  karena memang tidak ada di aplikasi
// membuat middleware sendiri = our own middleware
app.use((req, res, next) => {
    res.status(404).json({
        "status" : "Failed",
        "message" : " API not exist "
    })
})


app.listen("3000", () => {
    console.log("start aplikasi kita diport 3000")
})