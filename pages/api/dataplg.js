//@ts-check
import { db } from "../../lib/db";

const handler = async (_,res) => {
    // return res.status(200).json({message: "suksess" })
    try {
        const results = await db.query(`SELECT * FROM user ORDER BY id_pelanggan ASC `);
        await db.end;
    
        return res.json(results);    
    } catch (amc) {
         res.status(500).json({message: amc.message })
    }
  
};
export default  handler;
