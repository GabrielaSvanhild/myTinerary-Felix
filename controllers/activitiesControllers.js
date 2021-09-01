const Activity =require('../models/Activity')

const activitiesControllers={
    
    getActivitiesOfItinerary:(req,res)=>{
        Activity.find({itineraryId:req.params.id})
        .then(activities=>{
            if(activities!=null){
                res.json({success:true,response:activities})
            }else{
                res.json({success:false,response:"The itinerary's activities are not found"})
            }
        }) 
        .catch((error)=>{res.json({success:false,response:error.message})}) 
    },

    createAnActivity:(req,res)=>{
        const newActivity=  new Activity({...req.body})
        newActivity.save()
        .then(()=>res.json({ success: true }))
        .catch((error)=>res.json({success: false, response: error.message})) 
    },
}
module.exports = activitiesControllers
