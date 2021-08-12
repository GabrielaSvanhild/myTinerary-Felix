const express =require('express')
const cors = require('cors')
require('dotenv').config() //Busca algun archivo .env y en este archivo voy a hacer mis variables de entorno, porque no quiero que esa variable esta expuesta en mi codigo.


//middleWare
const app = express()

app.use(cors())
app.use(express.json())

const cities=[
    {ruta:"/assets/oslo.jpg",texto:"Oslo-Norway", id:0},
    {ruta:"/assets/arendal.jpg",texto:"Arendal-Norway",id:1},
    {ruta:"/assets/bergen.jpg",texto:"Bergen-Norway",id:2},
    {ruta:"/assets/stavanger.jpg",texto:"Stavanger-Norway",id:3},
    {ruta:"/assets/copenahue.jpeg",texto:"Copenhagen-Denmark",id:4},
    {ruta:"/assets/Reykjavik.jpeg",texto:"Reykjavik-Iceland",id:5},
    {ruta:"/assets/Selfoss islandia.jpeg",texto:"Selfoss-Iceland",id:6},
    {ruta:"/assets/Saariselkä.jpeg",texto:"Saariselkä-Findald",id:7},
    {ruta:"/assets/Skellefteå.jpg",texto:"Skellefteå-Sweden",id:8},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland",id:9},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland",id:10},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden",id:11},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland",id:12},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland",id:13},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden",id:14},  
 ]

app.get('/api/cities',(req,res)=>{
    res.json({response: cities})
})

//cuando te peguen a ese endpoint /api/invitados te contesto con LA COSA ESA DESPUES DE LA COMA(FUNCION CONTROLADORA DE LO QUE TIENE QUE HACER LUEGO DEL ENDPOINT))(VOS CONTESTALE CON TODA LA LISTA DE INVITADOS) 

app.listen(4000, ()=> console.log('Server listening on port 4000'))



