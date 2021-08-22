const City =require('../models/City')


 const citiesControllers = {
    obtenerTotalCities: (req, res) => {
        City.find()
        .then(cities=> res.json({success:true, response:cities}))
         //si se cae mongo y no lo catcheo te devuelve es una response null
        .catch((error) => res.json({ success: false, response: error.message }))//si tengo a mongo caido
    },
    obtenerCity: (req, res) => {
       City.findOne({_id:req.params.id})
      .then(city=> {
         if(city!=null){
            res.json({success:true,response:city})
         }else{
            res.json({success:false,response:"The city is not found"})
         }       
      }) //aca cae cuando el id que pone es valido como no
       .catch((error)=>  res.json({ success: false, response: error.message }))
    },
    crearNuevaCity:(req,res)=>{
        const nuevaCity = new City({
            src: req.body.src,
            name:req.body.name,
            country:req.body.country,
            currency:req.body.currency,
            language:req.body.language,
            description:req.body.description,
        })
        nuevaCity.save()
        .then(()=>res.json({ success: true }))
        .catch((error) => res.json({ success: false, response: error.message}))
    },
    borrarCity: (req, res) => {
        // Pedirle al modelo que borre de la city puntual que me esta pidiendo el frontend (a través del id)
        City.findOneAndDelete({ _id: req.params.id })
           .then((city_delete) => {
              if(city_delete){
                  res.json({ success: true })
              }else{
                  res.json({success:false,response:"The city is not found"})
              }
            })
           .catch((error) =>res.json({ success: false, response: error.message }))
     },
     modificarCity: (req, res) => {
        // Pedirle al modelo que busque la city en la BD para después modificarlo con los nuevos datos que me están mandando por el body.
        City.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
        .then((city_modified) =>{
            if(city_modified){
               res.json({ success: true })
            }else{
               res.json({success:false,response:"The city is not found"})
            }
         })
        .catch((error) =>res.json({ success: false, response:error.message }))
     },
}
 module.exports = citiesControllers
 