//@ts-check

import Adminlayout from '../../component/admin/Adminlayout';
import CreatePelanggan from '../../component/admin/createPelanggan'

const createplg = () =>{
    return(
        <div>
            <Adminlayout>
                <CreatePelanggan/>
            </Adminlayout>
        </div>
    )
}
export default createplg;