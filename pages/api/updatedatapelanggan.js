//@ts-check
import { db } from "../../lib/db";

const handler = async(req,res) =>{
    const {id_pelanggan, nama, nomor, alamat, foto} = req.body;
    try{
        if (!id_pelanggan || !nama || !nomor || !alamat){
            return res
            .status(400)
            .json({message: 'isi semua coy'})
        }
        const results = await db.query(
            `UPDATE user SET id_pelanggan = ? , nama = ?, nomor = ?, alamat = ?, foto = ? WHERE id_pelanggan= ?`
            ,[id_pelanggan,nama,nomor,alamat, foto,id_pelanggan]
        );      
        return res.json(results)
    }catch (amc){
        res.status(500).json({message: amc.message});
    }
}
export default handler;