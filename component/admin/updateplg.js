//@ts-check
import { useEffect, useState } from "react";
import Router, {useRouter} from "next/router";


const updateplg = () => {
    //deklarasi state
    const [_id_pelanggan,setId_pelanggan] = useState( ' ');
    const [_nama, setNama] = useState(' ');
    const [_nomor, setNomor] = useState(' ');
    const [_alamat, setAlamat] = useState(' ');
    const [_foto, setFoto] = useState (null);
    const [selectedFile, setSelectedFiles] = useState('');
    const [file, setFile] = useState(' ');
    // const [submiting, setSubmiting] = useState('false')
        
    //data yang di kiirm dari router
    const router = useRouter();
    const {id_pelanggan, nama, nomor, alamat} = router.query;
    console.log(router);
   useEffect(() => {
    if (typeof id_pelanggan == 'string') {
        setId_pelanggan(id_pelanggan);
    }
    if (typeof nama == 'string') {
        setNama(nama);
    }
    if (typeof nomor == 'string') {
        setNomor(nomor);
    }
    if (typeof alamat == 'string') {
        setAlamat(alamat);
    }
   },[id_pelanggan,nama,nomor,alamat])

   const onSelectImage = (e) =>{
    if(!e.target.files || e.target.files.length === 0) {
        setSelectedFiles(undefined)
        return
    }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function(){
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)
    }

    const submitHandler = async(amc) =>{
        amc.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/updatedatapelanggan", {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    id_pelanggan: _id_pelanggan,
                    nama: _nama,
                    nomor: _nomor,
                    alamat: _alamat,
                    foto: _foto
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("update data sukses")
            Router.push('/admin/Datapelanggan')
        }catch (amc){
            throw Error(amc.message)
        }
    }
    return(
        <div>
             <div className='container'>
                <form className= "w-50 mx-auto" onSubmit={submitHandler}>
                <h4>Edit data pelanggan</h4>
                    <div className=' mb-3'>
                        <label htmlFor='uploadgambar'>
                            <img
                                className = 'rounded-circle'
                                src = {_foto} alt = 'pilih gambar'
                                style = {{width:'75px', height: '75px', background: 'white' }}
                            />
                        </label>
                        <input
                            id='uploadgambar'
                            type='file'
                            style={{display: 'none'}}
                            onChange={onSelectImage}
                        />
                    </div>
                    <div className='form-floating'>
                        <input className='form-control' 
                        id ='id_pelanggan'
                        type ='text' 
                        placeholder ='id_pelanggan'
                        value ={_id_pelanggan}
                        onChange = {(amc) => setId_pelanggan(amc.target.value)}
                        /><label htmlFor='id_pelanggan'>id_pelanggan</label>
                    </div>
                    <div className='form-floating'>
                        <input className='form-control' 
                        id ='nama'
                        type ='text' 
                        placeholder ='Nama'
                        value ={_nama}
                        onChange = {(amc) => setNama(amc.target.value)}
                        /><label htmlFor='nama'>Nama</label>
                    </div>
                    <div className='form-floating'>
                        <input className='form-control' 
                        id ='nomor'
                        type ='text' 
                        placeholder ='Nomor'
                        value ={_nomor}
                        onChange = {(amc) => setNomor(amc.target.value)}
                        /><label htmlFor='nomor'>Nomor</label>
                    </div>
                    <div className='form-floating'>
                        <input className='form-control' 
                        id ='alamat'
                        type ='text' 
                        value={_alamat}
                        onChange = {(amc) => setAlamat(amc.target.value)}
                        /><label htmlFor='alamat'>Alamat</label>
                    </div>
                    <div>
                        <button className ='btn btn-primary d-flex flex-row-reverse' 
                        type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default updateplg;