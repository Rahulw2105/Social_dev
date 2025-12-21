console.log("Project Inititalized")
const express = require("express");
const PORT = 3000;


const app = express();

app.use((req,res) => {
res.send("Server is working")
})

app.listen(PORT,() => {
 console.log(`Server is running on ${PORT} `)
})


