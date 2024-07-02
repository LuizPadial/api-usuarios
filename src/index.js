const express = require('express')
const users =require('./dados/dados')
const app = express()

app.get('/users', (req, res) => {
    console.log("Dentro do endpoint")
    res.status(200)
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    if (Number(id) >users.length){
        res.send("Usuário não cadastrado.")
    }

    const user = users.find(user => user.id === Number(id)) 
    console.log(user)
    res.status(200)
    res.send(user)
});

app.listen(3000, ()=>{
    console.log("Runinng Server")
})