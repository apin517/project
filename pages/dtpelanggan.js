// import useSWR from "swr";

// async function fetcher(url){
//     const res = await fetch(url);
//     return res.json();
// }
import { usedataPelanggan } from "../lib/swr-fetcher";
const dtPelanggan = () => {
    // //url
    // const url = 'http://localhost:3000/api/hello';
    // //data dan error
    // const {data, error} = useSWR(url,fetcher);
    const {data, error} = usedataPelanggan();
    if (error){
        return <div>error coy</div>
    }
    if(!data){
        return <div>lo anjing</div>
    }
    const {dataPelanggan} = data;
    console.log(dataPelanggan);
    return (
        <div style={{marginLeft: "50px"}}>
            <h3>data dtPelanggan</h3>
            {
                dataPelanggan.map((plg, idx) => (
                    <div>{plg.nama} {plg.alamat}</div>
                ))
            }
        </div>
    );
}
export default dtPelanggan;