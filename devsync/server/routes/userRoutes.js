import express from 'express' ;
const router = express.Router() ;
import User from '../models/User.js' ;
import verifyToken from '../middlewares/verifyToken.js' ;

// route to save user details
router.post('/save' , verifyToken , async(req,res)=>{
    const { uid , name , email , picture } = req.user ;
    try{
        const user = await User.findOne({uid : uid}) ;
        if(user){
            res.json({user : user});

        }
        else if(!user){
            const newUser = new User({ uid, name, email, picture });
            await newUser.save() ;
            res.json({ user : newUser });
        }
    }catch(err){
        console.log(err) ;
        res.status(500).json({ error : "error in saving user" }) ;
    }
})

export default router ;