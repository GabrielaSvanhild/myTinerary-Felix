const User = require('../models/User')
bcryptjs = require('bcryptjs')

const userControllers={
    getUser:(req,res)=>{
        User.find()
        .then(users=> res.json({success:true, response: users}))
        .catch(error=> res.json({success:false, response: error.message}))
    },
    newUser:(req,res)=>{
        const{firstName, lastName, email, password, src, country, admin}=req.body
        let hashedPassword= bcryptjs.hashSync(password,10)
        // validacion que el usuario no exista y la contraseña
        const newUser= new User({
            firstName, lastName, email, password: hashedPassword, src, country, admin 
        })
        User.findOne({email : email})
        .then((user)=>{
            if(user){
                throw new Error('The e-mail already exist') 
            }else{
               newUser.save()
                .then(()=>res.json({ success: true,response: newUser }))
                .catch((error)=>res.json({ success: false, error: "Technical problems, come back soon"}))//cuando cae aca
            }
        })
        .catch(error=>{res.json({success: false, response: null, error: error.message})}) 
    },
    userLogued:(req,res)=>{
        const {email, password} = req.body
        User.findOne({email: email})
        .then(user=>{
            if(!user){
                throw new Error('E-mail/Password incorrect')       
            }
            let coincidence = bcryptjs.compareSync(password, user.password) 
            if(!coincidence){
                throw new Error('E-mail/Password incorrect')
            }
            res.json({success: true}) 
        })
        .catch(error=>{
            res.json({ success: false, baseDeDatosError: (error.message === 'UserName/Password incorrect'), error: error.message}) 
        })
    },

}
module.exports = userControllers



/* try{
            let userExist= await User.findOne({email:email})
            if(userExist) throw new Error('The user already exist')
            await newUser.save()
            res.json({success:true, response:newUser,error:null })
        }catch(e){
            res.json({succes:false, response:null, error:e.message})
        } */

     /* try{
            let userExist = await User.findOne({email:email})
            if (!userExist) throw new Error('UserName/Password incorrect')
            let coincidence = bcryptjs.compareSync(password, userExist.password) //devulve un boolean
            if(!coincidence) throw new Error('UserName/Password incorrect') 
            res.json({success:true})
        }catch (e){
            res.json({ success: false, error: e.message})
        } */





