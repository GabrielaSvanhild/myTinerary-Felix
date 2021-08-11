const express =require('express')
require('dotenv').config() //Busca algun archivo .env y en este archivo voy a hacer mis variables de entorno, porque no quiero que esa variable esta expuesta en mi codigo.

const app = express()

app.listen(4000, ()=> console.log('Server listening on port 4000'))