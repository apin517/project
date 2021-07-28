import Link from "next/link";

const sidebar = () =>{
    return(
        <div>
            {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navbar brand */}
                    <a className="navbar-brand mt-2 mt-lg-0" href="/admin/tampilan">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height={15} alt loading="lazy" />
                    </a>
                    {/* Left links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/admin/tampilan'>
                                <a className="nav-link" href="#">Dashboard</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/admin/Datapelanggan'>
                                <a className="nav-link" href="#">Edit Data</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/admin/createplg'>
                                <a className="nav-link" href="#">Create</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='http://localhost:3000'>
                                <a className="nav-link" href="#">Log out</a>
                            </Link>
                        </li>
                    </ul>
                    {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                    {/* Icon */}
                    <a className="text-reset me-3" href="#">
                        <i className="fas fa-shopping-cart" />
                    </a>
                    {/* Notifications */}
                    <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-bell" />
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    {/* Avatar */}
                    <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={25} alt loading="lazy" />
                    </a>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
                </nav>
                {/* Navbar */}

        </div>
    )
}
export default sidebar;