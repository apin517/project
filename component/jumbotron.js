

export default function Jumbotron() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container" data-aos="fade-up">

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                        <div className="col-xl-6 col-lg-8">
                            <h1>Strong Screen Printing Solution at AMC<span>.</span></h1>
                            <h2>Kalau Kita Bisa, Kenapa Tidak</h2>
                        </div>
                    </div>

                    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-palette-line"></i>
                                <h3><a style={{textDecoration: 'none'}} href="">Sablon Rubber</a></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-palette-line"></i>
                                <h3><a style={{textDecoration: 'none'}} href="">Sablon Plastisol</a></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-palette-line"></i>
                                <h3><a style={{textDecoration: 'none'}} href="">Sablon Flocking</a></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-palette-line"></i>
                                <h3><a style={{textDecoration: 'none'}} href="">Sablon Discharge</a></h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="icon-box">
                                <i className="ri-palette-line"></i>
                                <h3><a style={{textDecoration: 'none'}} href="">Sablon Polyflex</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}