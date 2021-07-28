
//@ts-check
import { usedataPelanggan } from "../../lib/swr-fetcher"
const Datapelanggan = () =>{
    const {data, error} = usedataPelanggan();
    if (error){
        return <div>error coy</div>
    }
    if(!data){
        return <div>lo anjing</div>
    }
    return(
        <div>
             <div style={{marginLeft: "50px"}}>
            <h3>data Pelanggan</h3>
                <table className= "table">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Jenis Barang</th>
                            <th>Jenis Sablon</th>
                            <th>Keterangan</th>
                            <th>Foto</th>
                        </tr>
                    </thead>                
                    <tbody>
                        {data.map((plg, id) => (
                            <tr key={id}>
                                <td>
                                    {plg.id_pelanggan}
                                </td>
                                <td>
                                    {plg.nama}
                                </td>
                                <td>
                                    {plg.nomor}
                                </td>
                                <td>
                                    {plg.alamat}
                                </td>
                                <td>
                                <img
                                        src = {plg.foto}
                                        alt ='foto'
                                        style = {{width: '75px', height: '75px'}}
                                    />
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
        </div>
    )
}
export default Datapelanggan;