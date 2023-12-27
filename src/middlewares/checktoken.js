import jwt from '../utils/jwt.js'


export default (req,res,next) =>{
    try {
        let {token} = req.headers

        if(!token){
            return next(new Error( 'xato token'))
        }

        let user = jwt.verify(token)
        req.user = user
        

        return next()
    } catch (error) {
        return next(new Error( 'xato token'))
    }
  }