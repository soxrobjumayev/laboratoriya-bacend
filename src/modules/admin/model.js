
import { fetchs } from "../../utils/db.js"



const LOGIN = async ({ admin_name, password}) => {
    try {




        return await fetchs(
            `
            select
            admin_id,
            admin_name, 
            ip
            from admins
            where admin_name = $1 and password= crypt($2,password) 
            `, [admin_name, password]
        )
    } catch (error) {

    }
}

export default {
    LOGIN
}


