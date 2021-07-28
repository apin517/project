import { db } from "../../lib/db";

const handler = async(req,res) =>{
    const {id_pelanggan, nama, nomor, alamat,foto} = req.body;
    try{
        if (!id_pelanggan || !nama || !nomor || !alamat){
            return res
            .status(400)
            .json({message: 'input harus di isi semua'})
        }
        const results = await db.query(
            `INSERT INTO user(id_pelanggan, nama, nomor, alamat,foto) VALUES (?,?,?,?,?)`
            ,[id_pelanggan,nama,nomor,alamat,foto]
        );
        await db.end;
        return res.json(results)
    }catch (amc){
        res.status(500).json({message: amc.message});
    }
}
export default handler;