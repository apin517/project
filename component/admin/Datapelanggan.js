
// @ts-nocheck
import { usedataPelanggan } from "../../lib/swr-fetcher"
import Link from 'next/link'
import { mutate } from "swr";
import  Router  from "next/router";

const Datapelanggan = () =>{
    const {data, error} = usedataPelanggan();
    if (error){
        return <div>error coy</div>
    }
    if(!data){
        return <div>loanjing</div>
    }
    async function hapuspelanggan(id_pelanggan){
        let res = await fetch(`/api/hapus-datapelanggan?id_pelanggan=${id_pelanggan}`, {method : 'DELETE'})
        let json = await res.json()
        console.log(res);
        if (!res.ok) throw (json.message) 
        mutate('/api/hapus-datapelanggan')
        alert('data sukses di eksekusi')
        Router.push('/admin/Datapelanggan')
    }
    return(
        <div >
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
                            <th>eksekusi</th>
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
                                <td className="d-flex flex-column">
                                    <Link href={`/admin/updatepelanggan?id_pelanggan=${plg.id_pelanggan}&nama=${plg.nama}&nomor=${plg.nomor}&alamat=${plg.alamat}`}>
                                        <button className="btn btn-primary me-2">Edit</button>
                                    </Link>
                                    <button  className="btn btn-danger"
                                        value={plg.id_pelanggan}
                                        onClick={(e)=>hapuspelanggan(e.target.value)}>
                                        Hapus
                                    </button>
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