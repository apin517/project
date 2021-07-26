import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>AMC<span>.</span></h3>
                                <p>
                                    Villa bukit mas<br/>
                                    Giri, Banyuwangi<br/><br/>
                                    <strong>Phone:</strong> +62 898-0572-239<br/>
                                    <strong>Email:</strong> avinirzam@gmail.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-telegram bx-flashing"></i></a>
                                    <a href="https://www.facebook.com/avin.irzam.1" className="facebook"><i className="bx bxl-facebook bx-flashing"></i></a>
                                    <a href="https://www.instagram.com/apin_meong?r=nametag" className="instagram"><i className="bx bxl-instagram bx-flashing"></i></a>
                                    <a href="https://wa.me/628980572239" className="google-plus"><i className="bx bxl-whatsapp bx-flashing"></i></a>
                                    <a href="avinirzam@gmail.com" className="google"><i className="bx bxl-google bx-flashing"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link href="/"><a>Home</a></Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="/services"><a>Services</a></Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="/portofolio"><a>Portfolio</a></Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link href="/team"><a>Team</a></Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sablon Rubber</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sablon Plastisol</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sablon Flocking</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sablon Discharge</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Sablon Polyflex</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Apin Meong Clothing.</h4>
                            <p>Kita sebagai jasa sablon Kaos memiliki sablon kaos yang berkualitas.</p>
                            <form action="" method="post">
                                <input type="email" name="email"/>
                                <input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>AMC.</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <Link href="/team"><a style={{textDecoration: 'none'}}>Apin Meong Clothing.</a></Link>
                </div>
            </div>
            </footer>
        </>
    )
}