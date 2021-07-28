//@ts-check

import Sidebar from "./sidebar";

const Adminlayout =({children}) =>{
    return(
       <div>
           <Sidebar/>
           {children}
       </div>
    )
}
export default Adminlayout;