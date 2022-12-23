const express = require('express')

//Fake DataBase
let emails =[
    { id: "153642", nome: "Neto", email: "Neto@Segato.com" },
    { id: "234654", nome: "Oswaldo", email: "Oswaldo@Segato.com" },
]
//Criar o APP
const app = express()
//API entender que está trabalhando com json
app.use(express.json())
// Aplicar Middlewares
app.post('/emails',(req,res)=>{
    const {id,nome,email} = req.body
    const dados ={id,nome,email}
    emails.push(dados)
    return req.status(201).json(dados)
    }
)

app.get('/emails',(req,res)=>{
    const allEmails = emails;
    return res.status(200).json(allEmails)
})
// mandar o servidor rodar
app.listen(3333,() => console.log("Server is running"));