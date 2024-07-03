const users = require('../dados/dados')

const listarUsuarios = (req, res) => {
    console.log("Dentro do endpoint")
    res.status(200).send(users)
}

const listarUsuarioId = (req, res) =>{
    const { id } = req.params;
    if (Number(id) >users.length){
        res.send("Usuário não cadastrado.")
    }else{
        const user = users.find(user => user.id === Number(id)) 
        res.status(200).send(user)
        console.log('usuario não cadastrado')
    }

} 

module.exports ={
    listarUsuarios,
    listarUsuarioId
}