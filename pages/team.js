import Layout from "../component/layout";

export default function Team() {
    return (
        <div>
            <Layout>
                <br />
                <br />
                <section id="team" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>Team</h2>
                        <p>Team Apin Meong Clothing.</p>
                        </div>

                        <div className="row">

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src="/img/team/team-1.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Avin Irza Mahendra</h4>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                <div className="member-img">
                                    <img src="/img/team/team-2.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Indah Surya</h4>
                                    <span>Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                <div className="member-img">
                                    <img src="/img/team/team-3.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Rifki Ardani</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                <div className="member-img">
                                    <img src="/img/team/team-4.jpg" className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Dinda K</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>
            </Layout>
        </div>
    )
}