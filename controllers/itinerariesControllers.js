const Itinerary = require('../models/Itinerary')

const itinerariesControllers={
    getAllItineraries: (req,res)=>{
        Itinerary.find()
        .then(itineraries=> res.json({succes:true, response:itineraries}))
        .catch((error) => res.json({ success: false, response: error.message }))
    },

    createAnItinerary: (req,res)=>{
        const newItinerary=  new Itinerary({...req.body})
        newItinerary.save()
        .then(()=>res.json({ success: true }))
        .catch((error)=>res.json({success: false, response: error.message}))
    },
    
    deleteItinerary: (req,res)=>{
        Itinerary.findOneAndDelete({_id:req.params.id})
        .then((itinery_delete)=>{
            if(itinery_delete){
                res.json({succes:true})
            }else{
                res.json({succes:false,response:"The itinerary is not found"})
            }         
        })
        .catch((error)=>res.json({succes:false,response:error.message}))
    },
}
module.exports = itinerariesControllers