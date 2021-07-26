import Layout from "../component/layout";
import { useState } from 'react'

export default function Portofolio() {
    const [dataPortfolio, setDataPortfolio] = useState([
        {
            alamatGambar : '/img/portfolio/portfolio-1.jpg',
            judulGambar : 'Rubber'
        },
        {
            alamatGambar : '/img/portfolio/portfolio-2.jpg',
            judulGambar : 'Plastisol'
        },
        {
            alamatGambar : '/img/portfolio/portfolio-3.jpg',
            judulGambar : 'Kaos Polos'
        },
        {
            alamatGambar : '/img/portfolio/portfolio-4.jpg',
            judulGambar : 'Flocking'
        },
        {
            alamatGambar : '/img/portfolio/portfolio-5.jpg',
            judulGambar : 'Discharge'
        },
        {
            alamatGambar : '/img/portfolio/portfolio-6.jpg',
            judulGambar : 'Polyflex'
        }
    ]);
    const [alamatGambar, setAlamatGambar] = useState("");
    const [judulGambar, setJudulGambar] = useState("");

    const simpanDataPortfolio = () =>{
        setDataPortfolio([...dataPortfolio,{"alamatGambar":alamatGambar,"judulGambar":judulGambar}])
    }
    return (
        <div>
            <Layout>
                <br />
                <br />
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                            <p>Portfolio Hasil Sablon Kami</p>
                        </div>
                        <div className="row mb-3 pb-4">
                            <div className="col-6">
                                Alamat Gambar
                                <br/>
                                <input placeholder="Masukkan alamat gambar" type="text" onChange={(amc)=>setAlamatGambar(amc.target.value)} className="form-control" />
                                <br/>
                                Judul Gambar
                                <br/>
                                <input placeholder="masukkan judul gambar" type="text" onChange={(amc)=>setJudulGambar(amc.target.value)} className="form-control" />
                                <br/>
                                <button onClick={simpanDataPortfolio} className="btn btn-outline-warning get-started-btn scrollto">
                                    + Tambah Portfolio
                                </button>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                            {
                                dataPortfolio.map(dp => (
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src={dp.alamatGambar} className="img-fluid" alt=""/>
                                            <div className="portfolio-info">
                                                <h4>{dp.judulGambar}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}