
import { Router } from "express";
import controllers from "./controllers.js";
import token from '../../middlewares/checktoken.js'

 
const  router = Router()

router.get('/GET_yangilik',token,controllers.GET_yangilik)
router.get('/GET_maqola',controllers.GET_maqola)
router.get('/GET_ariza',token,controllers.GET_ariza)



router.post('/POST_yangilik',token,controllers.POST_yangilik)
router.post('/POST_maqola',token,controllers.POST_maqola)
// router.post('/POST_ariza',controllers.POST_arizaa)




router.delete('/yangilik/:yangilik_id',token,controllers.yangilik_DELETE)
router.delete('/maqola/:maqola_id',token,controllers.maqola_DELETE)


router.put('/yangilik/:yangilik_id',token,controllers.PUT_yangilik)
router.put('/maqola/:maqola_id',token,controllers.PUT_maqola)










export default  router 


