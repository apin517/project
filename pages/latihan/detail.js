import { usedataPelanggan } from "../../lib/swr-fetcher";
const detailplg = () =>{
    const {data, error} = usedataPelanggan();
    if(error){return <div>Error...</div>}
    if(!data){return <div>Loading...</div>}
    const {dataPelanggan} = data;
    return(
        <div> 
            <ul>
                {dataPelanggan.map((plg,idx) => (
                    <>
                    <li>{plg.nama}</li>
                    <li>{plg.alamat}</li>
                    </>
                ))}
            </ul>
        </div>
    )
}
export default detailplg;