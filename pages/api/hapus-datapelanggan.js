//@ts-check

import { db } from "../../lib/db";

const handler = async (req,res)  =>{
    const {id_pelanggan} = req.query
    try{
        if (!id_pelanggan) {
            return res.this.status(400).json({message: '`id_pelanggan`tidak ada'})
        }
        const results = await db.query(
            `DELETE FROM user WHERE id_pelanggan = ?`,
            id_pelanggan)
        res.json(results)
    }catch (amc){
        res.status(500).json({message: amc.message})
    }
}
export default handler;