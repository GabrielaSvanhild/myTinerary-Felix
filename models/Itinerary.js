const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    photo_itinerary:{type: String, required: true },
    photo_author:{type: String, required: true},
    name_author: { type: String, required: true },
    price:{type: Number,  min: 1, max: 5, required: true},
    duration:{type: Number, required: true},
    hashtag:{type: Array , required:true},
    comments:[
                {
                    comment:{type: String},
                    userId:{type:mongoose.Types.ObjectId,ref:'user'} 
                }
            ],
    likes:{type:Array},
    description:{type:String},
    cityId:{type:mongoose.Types.ObjectId,ref:'city',required:true}   
})



const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary