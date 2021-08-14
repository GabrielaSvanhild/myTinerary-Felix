const City =require('../models/City')

/* const cities=[
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
 ] */

 const citiesControllers = {
    obtenerTotalCities: (req, res) => {
        City.find()
        .then(cities=> res.json({response:cities}))
         /* res.json({ response: cities }) */
    },
    obtenerCity: (req, res) => {
       City.findOne({_id:req.params.id})
       .then(city=> res.json({response:city}))
    },
    crearNuevaCity:(req,res)=>{
        const nuevaCity = new City({
            name: req.body.name,
            country:req.body.country,
            src:req.body.src,
            description: req.body.description
        })
        nuevaCity.save()
        .then(()=>res.json({ success: true }))
    }
 }
 
 module.exports = citiesControllers