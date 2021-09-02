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
        Itinerary.find({cityId:req.params.id}).populate("comments.userId",{firstName: 1, lastName: 1, src: 1})
        .then(itineraries=>{
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
    },
    modifyItineraryComment:async(req,res)=>{
        switch(req.body.actionType){

            case 'addComment':
                try {
                    const itinerary_new_comment = await Itinerary.findOneAndUpdate
                    ({_id: req.params.id}, {$push: {comments: {comment: req.body.comment, userId: req.user._id}}},
                        {new: true}).populate('comments.userId', {firstName: 1, lastName: 1, src: 1})
                    if (itinerary_new_comment) {
                        res.json({success: true, response: itinerary_new_comment.comments})
                    } else {
                        throw new Error()
                    }
                } catch (error) {
                    res.json({success:false,response:error.message})
                }
                break;
                
            case 'modifyComment':
                try{
                    let comment_modified = await Itinerary.findOneAndUpdate({"comments._id":req.params.id},
                    {$set:{"comments.$.comment": req.body.comment}},{new:true})
                    if (comment_modified) {
                        res.json({success: true, response: comment_modified.comments})
                    } else {
                        throw new Error()
                    }

                }catch (error) {
                    res.json({success:false,response:error.message})
                }
                break;

            case 'deleteComment':
            try{
                let comment_deleted = await Itinerary.findOneAndUpdate({"comments._id":req.params.id},
                {$pull:{comments:{_id:req.params.id}}})
                if (comment_deleted) {
                    res.json({success: true})
                } else {
                    throw new Error()
                }
            }catch(error) {
                res.json({success:false,response:error.message})
            }
            break;
                /* try{
                    let comment_deleted = await Itinerary.findOneAndUpdate({"comments._id":req.body.idComment},
                    {$pull:{comments:{_id:req.body.idComment}}})
                    if (comment_deleted) {
                        res.json({success: true})
                    } else {
                        throw new Error()
                    }
                }catch(error) {
                    res.json({success:false,response:error.message})
                }
                break; */
        }

    }
    /* addCommentItinerary:(req,res)=>{
        Itinerary.findOneAndUpdate({_id:req.params.id},
            {$push:{comments:{comment:req.body.comment, userId:req.user._id }}},{new:true})
        .populate('comments.userId', {firstName: 1, lastName: 1, src: 1})
        .then((itinerary_new_comment)=>{
            res.json({success:true,response:itinerary_new_comment.comments})
        })
        .catch(error=>res.json({success:false, error:error.message}))
    },
    deleteComment:(req,res)=>{
        Itinerary.findOneAndUpdate({"comments._id":req.params.id},
        {$pull:{comments:{_id:req.params.id}}},{new:true})
       .then(comment_deleted=>res.json({success:true, response:comment_deleted.comments}))
       .catch(error=> res.json({success:false, response:error}))
    },
    modifyComment:(req,res)=>{
        Itinerary.findOneAndUpdate({"comments._id":req.params.id},
        {$set:{"comments.$.comment": req.body.comment}},{new:true})
        .then((comment_modified)=>{
            res.json({success:true,response:comment_modified.comments})
        })
        .catch((error)=>res.json({success:false,response:error.message}))
    } */
}
module.exports = itinerariesControllers