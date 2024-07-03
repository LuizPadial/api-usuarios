const express = require('express');
const app = express()
const rotas = require('./rotas');

app.use(rotas);

const port = 3000

app.listen(port, () => {
    console.log(`Runinng Server at ${port}`)
})