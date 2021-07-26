import Link from 'next/link'
export default function Header() {
    return (
        <div>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center justify-content-lg-between">

                <h1 className="logo me-auto me-lg-0"><a style={{textDecoration: 'none'}} href="#">AMC<span>.</span></a></h1>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li>
                        <Link href="/">
                            <a className="nav-link scrollto">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <a className="nav-link scrollto">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portofolio">
                            <a className="nav-link scrollto">Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/team">
                            <a className="nav-link scrollto">Team</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/get_order">
                            <a className="nav-link scrollto">Order</a>
                        </Link>
                    </li>
                    {/* <li className="dropdown"><a style={{textDecoration: 'none'}} href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a style={{textDecoration: 'none'}} href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a style={{textDecoration: 'none'}} href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a style={{textDecoration: 'none'}} href="#">Deep Drop Down 1</a ></li>
                            <li><a style={{textDecoration: 'none'}} href="#">Deep Drop Down 2</a></li>
                            <li><a style={{textDecoration: 'none'}} href="#">Deep Drop Down 3</a></li>
                            <li><a style={{textDecoration: 'none'}} href="#">Deep Drop Down 4</a></li>
                            <li><a style={{textDecoration: 'none'}} href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a style={{textDecoration: 'none'}} href="#">Drop Down 2</a></li>
                        <li><a style={{textDecoration: 'none'}} href="#">Drop Down 3</a></li>
                        <li><a style={{textDecoration: 'none'}} href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                <Link href='/aut/login'>
                <a style={{textDecoration: 'none'}} className="get-started-btn scrollto">Login</a>
                </Link>

                </div>
            </header>
        </div>
    )
}