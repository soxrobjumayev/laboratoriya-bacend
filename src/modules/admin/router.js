
import { Router } from "express";
import controllers from './controllers.js'
import ipadress from '../../middlewares/ipAdress.js'


const router = Router()

router.post('/login',  controllers.LOGIN)




export default router
