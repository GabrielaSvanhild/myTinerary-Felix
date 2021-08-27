const express =require('express')
const cors = require('cors')
const passport = require('passport')
require('dotenv').config()
require('./config/dataBase')
require('./config/passport')                                                               //Busca algun archivo .env y en este archivo voy a hacer mis variables de entorno, porque no quiero que esa variable esta expuesta en mi codigo.
const router = require('./routes/index')




//middleWare
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)
                                                                                          
app.listen(4000, ()=> console.log('Server listening on port 4000'))



