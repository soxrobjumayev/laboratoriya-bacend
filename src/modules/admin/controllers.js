
import model from './model.js'
import jwt from '../../utils/jwt.js'
 
 const LOGIN =async (req,res) =>{
    try {
        const admin = await model.LOGIN(req.body)
                if(admin && admin.ip == req.body.ip){
                 admin.ip = null

                res.status(200).json({
                status:200,
                message:'ok',
                data: admin,
                token: jwt.sign({adminId: admin.adminId})
            }
            )

         }else{
            res.status(403).json({
               status:403,
                message:'xato admin',
                 data: admin,
            })
         }
    } catch (error) {
        console.log('login_controller',error.message);
    }
 }





export default {
 LOGIN,
}


