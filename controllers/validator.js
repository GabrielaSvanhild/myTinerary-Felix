const joi = require('joi')

const validator =(req,res,next)=>{

    const schema = joi.object({
        firstName:joi.string().trim().min(2).max(20).required().messages({

            'string.min':'This field must have bettween  2 and 20 letters.',
            'string.max':'This field must have bettween  2 and 20 letters.'
        }),
        lastName:joi.string().trim().min(2).max(20).required().messages({

            'string.min':'This field must have bettween  2 and 20 letters.',
            'string.max':'This field must have bettween  2 and 20 letters.'
        }),
        email:joi.string().trim().email().required().messages({

            'string.email':'This field must be a valid email',
        }),
        password:joi.string().trim().min(8).max(30).required().messages({

            'string.min':'This field must have bettween  8 and 30 characters.',
            'string.max':'This field must have bettween  8 and 30 characters .'
        }),
        src:joi.string().required(),
        country:joi.string().required(),
        google:joi.boolean(),
        
    })
    const validation =schema.validate(req.body, { abortEarly: false })    
    if(!validation.error){
        next()
    } else{
        res.json({success:false, errors: validation.error.details})
    } 
    
}
module.exports = validator










//FIRST NAME
/* .pattern(new RegExp("^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$")).messages({
            'string.pattern.base':'This field must have bettween  2 and 20 letters.'
        }) */

        //PASSWORD
        /* .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,20}$')).messages({

            'string.pattern.base':'This field must have a minimum of eight characters, at least one letter, one number and one special character'
        }), */