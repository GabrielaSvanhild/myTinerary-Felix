const express =require('express')
const cors = require('cors')
const passport = require('passport')
require('dotenv').config()
require('./config/dataBase')
require('./config/passport')  
const path=require('path')                                                             //Busca algun archivo .env y en este archivo voy a hacer mis variables de entorno, porque no quiero que esa variable esta expuesta en mi codigo.
const router = require('./routes/index')




//middleWare
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}
                                                                                          
app.listen(process.env.PORT || 4000, "0.0.0.0", ()=> console.log('Server listening on port 4000'))



