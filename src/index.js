const express = require('express')
const app = express()

app.get('/login', (req, res) => {
    console.log("Dentro do endpoint")
    res.send("Server Rodando")
});

app.listen(3000, ()=>{
    console.log("Runinng Server")
})