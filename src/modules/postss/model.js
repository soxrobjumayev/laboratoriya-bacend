import { fetchAll , fetchs } from "../../utils/db.js"



const GET_yangilik = async () => {
    try { 
return await  fetchAll(`
select *
    from yangilik
    where deleted_at 
    IS NULL


`)
    } catch (error) {
        console.log('yangilik_error', error.message);
    }
}

const GET_maqola = async () => {
    try { 
return await  fetchAll(`
select *
    from maqola
    where deleted_at 
    IS NULL
`)
    } catch (error) {
        console.log('GET_maqola_error', error.message);
    }
}


const GET_ariza = async () => {
    try { 
return await  fetchAll(`
select *
    from ariza
  

`)
    } catch (error) {
        console.log('ariza_error', error.message);
    }
}


const POSTS_yangilik = ` insert into yangilik(yangilik_title,yangilik_body) values ($1,$2) returning * `

const POST_yangilik = async ({yangilik_title,yangilik_body}) => {
    try {
        return await fetchs(POSTS_yangilik,[yangilik_title,yangilik_body])
    } catch (error) {
        console.log('POSTS_yangilik', error.message);
    }
}

const POSTS_maqola = ` insert into maqola(maqola_title,maqola_body) values ($1,$2) returning * `

const POST_maqola = async ({maqola_title,maqola_body}) => {
    try {
        
        // let imgName = Date.now() + avatar.name.replace(/\s/g, '')
        // avatar.mv(path.resolve('uploads', imgName))

        return await fetchAll(POSTS_maqola,[maqola_title,maqola_body])
    } catch (error) {
        console.log('POST_maqola', error.message);
    }
}

const POSTS_ariza = ` insert into ariza(familyangiz,isminggiz,telefon_raqam,ariza_maqsadi) values ($1,$2,$3,$4) returning * `

const POST_ariza = async ({familyangiz,isminggiz,telefon_raqam,ariza_maqsadi}) => {
    try {
        
        // let imgName = Date.now() + avatar.name.replace(/\s/g, '')
        // avatar.mv(path.resolve('uploads', imgName))

        return await fetchAll(POSTS_ariza,[familyangiz,isminggiz,telefon_raqam,ariza_maqsadi])
    } catch (error) {
        console.log('POST_ariza', error.message);
    }
}


const DELETEE = `
update yangilik 
set 
deleted_at = current_timestamp
where yangilik_id = $1 returning *
`



const yangilik_DELETE = async ({yangilik_id}) => {
    try {
        return await fetchAll(DELETEE,[yangilik_id])
    } catch (error) {
        console.log('yangilik_delete', error.message);
    }
}



const DELETEEE = `
update maqola 
set 
deleted_at = current_timestamp
where maqola_id = $1 returning *
`



const maqola_DELETE = async ({maqola_id}) => {
    try {
        return await fetchAll(DELETEEE,[maqola_id])
    } catch (error) {
        console.log('maqola_delete', error.message);
    }
}



const PUT_yan = `
    update yangilik 
    set 
    yangilik_title = $2,
    yangilik_body = $3
    where yangilik_id = $1 returning *

`

const PUT_yangilik = async ({yangilik_id},{yangilik_title,yangilik_body}) => {
    try {
        return await fetchAll(PUT_yan,[yangilik_id,yangilik_title,yangilik_body])
    } catch (error) {
        console.log('yangilik_put_model', error.message);
    }
}


const PUT_maqolaa = `
    update maqola 
    set 
    maqola_title = $2,
    maqola_body = $3
    where maqola_id = $1 returning *
`

const PUT_maqola = async ({maqola_id},{maqola_title,maqola_body}) => {
    try {
        return await fetchs(PUT_maqolaa,[maqola_id,maqola_title,maqola_body])
    } catch (error) {
        console.log('maqola__put_model', error.message);
    }
}







export default {
    GET_yangilik,
    GET_maqola,
    GET_ariza,

    POST_yangilik,
    POST_maqola,
    // POST_ariza,

    yangilik_DELETE,
    maqola_DELETE,


    PUT_yangilik,
    PUT_maqola
}

 