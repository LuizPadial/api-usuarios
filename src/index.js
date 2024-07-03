const express = require('express');
const app = express()
const routers = require('./routers');

app.use(express.json());
app.use(routers);

const port = 3000

app.listen(port, () => {
    console.log(`Runinng Server at ${port}`)
})