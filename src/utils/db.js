
import pg from 'pg'


const pool = new pg.Pool({connectionString:'postgres://ngijvhai:olJeHcxZ51expPOMGS2HgdrCBVZFlTux@floppy.db.elephantsql.com/ngijvhai',
})



async function fetchAll(SQL, params = []) {

    const client = await pool.connect()

    try {
        const { rows } = await client.query(SQL, params)
        return rows
    } catch (error) {
        console.log('db error', error.message);
    } finally {
        client.release()
    }


}


async function fetchs(SQL, params = []) {

    const client = await pool.connect()

    try {
        const { rows: [row] } = await client.query(SQL, params)
        return row
    } catch (error) {
        console.log(error);
        console.log('db error', error.message);
    } finally {
        client.release()
    }
}

export {
    fetchAll,
    fetchs
}

