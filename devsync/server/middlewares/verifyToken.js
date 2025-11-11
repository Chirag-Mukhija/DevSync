import admin from '../firebase.js' ;
 // this is just to verify , if the token is sent by client , 
const verifyToken = async(req,res,next)=>{
  const token = req.headers.authorization ;
  if(!token){
    return res.status(401).json({ error : "unauthorized" })
  }
  try{
    const decodedToken = await admin.auth().verifyIdToken(token) ;
    req.user = decodedToken ;
    next() ;
  }catch(err){
    return res.status(401).json({ error : "unauthorized" })
  }
}

export default verifyToken ;