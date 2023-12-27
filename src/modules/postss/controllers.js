
import model from './model.js'

const GET_yangilik = async (req, res) => {
    try {
        const GET_MANBA = await model.GET_yangilik()
        return res.status(200).json(GET_MANBA)

    } catch (error) {
        console.log('GET_yangilik_xato_cont', error.message);
    }
}

const GET_maqola = async (req, res) => {
    try {
        const GET_maqola = await model.GET_maqola()
        return res.status(200).json(GET_maqola)

    } catch (error) {
        console.log('GET_maqola_xato_cont', error.message);
    }
}



const GET_ariza = async (req, res) => {
    try {
        const GET_ariza = await model.GET_ariza()
        return res.status(200).json(GET_ariza)

    } catch (error) {
        console.log('GET_ariza_xato_cont', error.message);
    }
}



const POST_yangilik = async (req, res) => {


    try {
        const cate = await model.POST_yangilik(req.body)
        res.status(200).send(cate)
    } catch (error) {
        console.log('POST_yangilik_cont', error.message);
    }

}

const POST_maqola = async (req, res) => {


    try {
        const cate = await model.POST_maqola(req.body)
        res.status(200).send(cate)
    } catch (error) {
        console.log('POST_maqola_cont', error.message);
    }


    const POST_arizaa = async (req, res) => {


        try {
            const cate = await model.POST_ariza(req.body)
            res.status(200).send(cate)
        } catch (error) {
            console.log('POST_ariza_cont', error.message);
        }

    }
}




const yangilik_DELETE = async (req, res) => {


    try {
        const yangilikdel = await model.yangilik_DELETE(req.params)
        res.status(200).send(yangilikdel)
    } catch (error) {
        console.log('yangilik_delete', error.message);
    }

}



const maqola_DELETE = async (req, res) => {


    try {
        const maqola_del = await model.maqola_DELETE(req.params)
        res.status(200).send(maqola_del)
    } catch (error) {
        console.log('maqola_delete', error.message);
    }

}




const PUT_yangilik = async (req, res) => {


    try {
        const neww = await model.PUT_yangilik(req.params, req.body)
        res.status(200).send(neww)
    } catch (error) {
        console.log('yanglik_put_contrl', error.message);
    }
}



const PUT_maqola = async (req, res) => {


    try {
        const neww = await model.PUT_maqola(req.params, req.body)
        res.status(200).send(neww)
    } catch (error) {
        console.log('maqola_put_contrl', error.message);
    }
}










export default {
    GET_yangilik,
    GET_maqola,
    GET_ariza,


    POST_yangilik,
    POST_maqola,
    // POST_arizaa,
    




    yangilik_DELETE,
    maqola_DELETE,


    PUT_yangilik,
    PUT_maqola
}


