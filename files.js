const fs=require("fs")

fs.readFile("abc.txt", "utf8", function(err, data){
    
    console.log(data);
})