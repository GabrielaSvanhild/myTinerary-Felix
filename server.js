const express =require('express')
const cors = require('cors')
require('dotenv').config()                                                               //Busca algun archivo .env y en este archivo voy a hacer mis variables de entorno, porque no quiero que esa variable esta expuesta en mi codigo.
const router = require('./routes/index')
require('./config/dataBase')

//middleWare
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)
                                                                                          
app.listen(4000, ()=> console.log('Server listening on port 4000'))



