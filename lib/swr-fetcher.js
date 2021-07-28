import useSWR from "swr";

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const usedataPelanggan = () =>{
     //url
     const url = 'http://localhost:3000/api/dataplg';
     //data dan error
     const {data, error} = useSWR(url,fetcher);

     return {data, error}
}