var express= require("express");
var oneLinerJoke = require('one-liner-joke');
const path = require('path');
const memes = require("random-memes");

const app = new express();
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get("/", (req, res)=>{
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    var jokes = getRandomJoke.body

    memes.random().then(meme => {
        console.log("Meme generated: " + meme.image)
        console.log("Category: " + meme.category)
        console.log("Caption: " + meme.caption)


        res.render("views/index", {data : meme.image, jokes: jokes});
        })
    
})

app.get("/latest", (req, res)=>{
    res.sendFile("views/latest.html", {root:__dirname}); 
})
app.get("/about", (req, res)=>{
    res.sendFile("views/about.html", {root:__dirname});
})

app.listen(8080, ()=>{
    console.log("server is running..");
})


























// const server = http.createServer((req, res)=>{
//     if (req.url=="/cars") {
//         res.write("<h1>Cars</h1>")
//         res.end()
//     }
//     if (req.url=="/bikes") {
//         res.write("<h1>bikes</h1>")
//         res.end()
//     }
// })

// server.listen("81",()=>{
//     console.log("......")
// } )



