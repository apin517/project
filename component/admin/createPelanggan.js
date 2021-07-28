//@ts-check

import { useState } from "react"
const createPelanggan = () =>{
    const [id_pelanggan,setId_pelanggan] = useState( ' ');
    const [nama, setNama] = useState(' ');
    const [nomor, setNomor] =useState(' ');
    const [alamat, setAlamat] = useState(' ');
    const [foto, setFoto] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState('')
    const [file, setFile] = useState('')

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
async function submitHandler(amc){
    amc.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/create-pelanggan", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    id_pelanggan,
                    nama,
                    nomor,
                    alamat,
                    foto
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("penambahan data sukses")
        }catch (amc){
            throw Error(amc.message)
        }
}
return(
    <div> 
         <div className='container'>
            <form className= "w-50 mx-auto" onSubmit={submitHandler}>
            <h4 className='text-center'>input data pelanggan</h4>
                <div className=' mb-3'>
                    <label htmlFor='uploadgambar'>
                        <img
                            className = 'rounded-circle'
                            src = {foto} alt = 'pilih gambar'
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
                    value ={id_pelanggan}
                    onChange = {(amc) => setId_pelanggan(amc.target.value)}
                    /><label htmlFor='id_pelanggan'>id_pelanggan</label>
                </div>
                <div className='form-floating'>
                    <input className='form-control' 
                    id ='nama'
                    type ='text' 
                    placeholder ='Nama'
                    value ={nama}
                    onChange = {(amc) => setNama(amc.target.value)}
                    /><label htmlFor='nama'>Nama</label>
                </div>
                <div className='form-floating'>
                    <input className='form-control' 
                    id ='nomor'
                    type ='text' 
                    placeholder ='Nomor'
                    value ={nomor}
                    onChange = {(amc) => setNomor(amc.target.value)}
                    /><label htmlFor='nomor'>Nomor</label>
                </div>
                <div className='form-floating'>
                    <input className='form-control' 
                    id ='alamat'
                    type ='text' 
                    placeholder ='Alamat'
                    value ={alamat}
                    onChange = {(amc) => setAlamat(amc.target.value)}
                    /><label htmlFor='alamat'>Alamat</label>
                </div>
                <div>
                    <button className ='btn btn-primary d-flex flex-row-reverse' 
                    type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    </div>
)
}
export default createPelanggan;