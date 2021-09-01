const Itinerary = require('../models/Itinerary')

const itinerariesControllers={
    getAllItineraries: (req,res)=>{
        Itinerary.find()
        .then(itineraries=> res.json({success:true, response:itineraries}))
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
    getAnItinerary:(req,res)=>{
        Itinerary.findOne({_id:req.params.id})
        .then(itinerary=>{
            if(itinerary!=null){
                res.json({success:true,response:itinerary})
            }else{
                res.json({success:false,response:"The itinerary is not found"})
            }
        }) 
        .catch((error)=>{res.json({success:false,response:error.message})})
    },
    editItinerary:(req,res)=>{
        Itinerary.findOneAndUpdate({_id:req.params.id},{...req.body})
        .then((itinerary_modified)=>{
            if(itinerary_modified){
                res.json({ success: true })
            }else{
                res.json({success:false,response:"The itinerary is not found"})
            }   
        })
        .catch((error)=>res.json({success:false,response:error.message}))
    },
    getItinerariesOfCity:(req,res)=>{
        Itinerary.find({cityId:req.params.id})
        .then(itineraries=>{
            /* if(!itineraries.length) */
            if(itineraries!=null){
                res.json({success:true,response:itineraries})
            }else{
                res.json({success:false,response:"The city's itineraries are not found"})
            }
        }) 
        .catch((error)=>{res.json({success:false,response:error.message})}) 
    },
    like_dislike_itinerary:(req,res)=>{
        Itinerary.findOne({_id:req.params.id})
        .then(itinerary=>{
            if(itinerary.likes.includes(req.user._id)){
                Itinerary.findOneAndUpdate({_id:req.params.id},{$pull:{likes:req.user.id}},{new:true})
                .then((itinerary_without_like)=>{
                    res.json({success:true, response:itinerary_without_like})
                }) 
            }else{
                Itinerary.findOneAndUpdate({_id:req.params.id},{$push:{likes:req.user.id}},{new:true})
                .then((itinerary_with_like)=>{
                    res.json({success:true, response:itinerary_with_like})
                }) 
            }
        })
        .catch((error)=>res.json({success:false, response:error})) 
    }
}
module.exports = itinerariesControllers