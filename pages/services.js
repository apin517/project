import Layout from '../component/layout'
import parse from 'html-react-parser'
// import ContentServices from '../component/contentServices'

export default function Services() {
    const dataSablon = [
        {
            linkGambar : '/img/Contoh-Sablon-Rubber-Ink-2-1024x768.jpg',
            ling : '/',
            namaSablon : 'Sablon Rubber.',
            artikel    : '<p>Sablon Rubber (Rubber = Karet). Seperti makna namanya, sablon rubber adalah sablon yang elastis. Merupakan salah satu jenis sablon yang ramai dipakai di kalangan konveksi di masyarakat.</p><p>Sablon rubber merupakan sablon yang berbahan dasar air, atau dalam bahasa kerennya Water Based yang berarti jenis tinta sablon ini bersifat menyatu dengan air atau bisa diolah menggunakan air.</p><p>Sablon rubber juga mampu untuk menutup keseluruhan media tekstil gelap , bahkan yang berwarna hitam sekalipun. Untuk sablon kaos gelap, diperlukan whitebase atau Tinta Rubber Putih Murni. Whitebase berfungsi untuk menutup atau melapisi diantara serat kain agar warna setelahnya bisa sempurna timbul diatasnya.</p>'
        },
        {
            linkGambar :'/img/02-Sablon-plastisol.jpg',
            ling :'/',
            namaSablon :'Sablon Plastisol.',
            artikel :'<p>Sablon plastisol adalah salah satu jenis sablon terbaik yang seringkali direkomendasikan untuk digunakan dalam mencetak desain kaos. Kaos adalah jenis pakaian yang pasti menggunakan teknik cetak sablon untuk membuatnya lebih menarik dari kaos yang lainnya. Jika kamu memiliki ide untuk mendesain kaos dan memperjualbelikan, maka kamu sebaiknya mempertimbangkan jenis sablon apa yang ingin kamu gunakan. Pemilihan jenis sablon tersebut sebaiknya kamu lakukan setelah menentukan apa saja perbedaan sablon yang ada dan direkomendasikan.</p><p>Seperti juga ketika kamu memilih untuk menggunakan sablon plastisol. Apakah kamu sudah mengetahui apa jenis sablon ini? Bagaimana karakteristik hasil sablonnya? Apa perbedaan sablon manual dan sablon digital dari tinta plastisol ini? Apakah ada kekurangan dari jenis sablon ini? Lalu apa yang menjadi kelebihannya? Semua informasi mengenai jenis sablon ini yang akan dibahas pada artikel kali ini. Semoga setelah kamu mempelajari seluruh informasi terkait sablon plastisol, anda menjadi tidak ragu lagi memilihnya untuk mencetak desain kaos kamu.</p>'
        },
        {
            linkGambar :'/img/flocking.jpg',
            ling :'/',
            namaSablon :'Sablon Flocking.',
            artikel :'<p>Untuk membuat desain sablon pada kaos, terdapat beberapa jenis sablon yang bisa diaplikasikan. Salah satunya adalah sablon flocking sendiri. Di mana jenis sablon ini juga sering menjadi salah satu alternatif serta pilihan untuk desain sablon kaos para penggunanya maupun para pengusaha sablon.</p><p>Sebagai salah satu pilihan untuk aplikasi desain pada kaos, tinta flocking ini juga sering digunakan oleh para tukang sablon. Sebelum mengetahui kekurangan dan kelebihan dari jenis sablon yang satu ini, ada baiknya jika kamu mengenal terlebih dahulu karakteristiknya.</p><p>Sebetulnya sablon tersebut hampir mirip dengan sablon rubber dengan bahan baku yang terbuat dari karet, lebih spesifiknya dengan serat fiber dan bahan yang lebih halus. Tinta ini sendiri dispesifikasikan ke dalam 3 jenis, di antaranya Flock bentuk serbuk, Flock bentuk selembaran (mirip dengan kain), dan Flock menyerupai stiker</p>'
        },
        {
            linkGambar :'/img/discharge.jpg',
            ling :'/',
            namaSablon :'Sablon Discharge.',
            artikel :'<p>Sablon Discharge atau kerap disebut dengan sablon cabut warna adalah teknik sablon manual yang hasil tintanya mengubah warna bahan kaos dengan warna tintanya. Misalnya kaos berwarna hitam disablon tinta discharge warna putih. Maka setelah disablon bahan kaos yang disablon akan berubah menjadi putih.</p><p>Kini penggunaan sablon kaos dengan teknik discharge semakin marak dipopulerkan berbagai clothing line tanah air. Setelah Unkl347 semakin mapan dan meninggalkan teknik lain pada produknya,Crooz menyusul dengan produk – produk discharge pada kaos gelapnya.</p><p>Tak mau ketinggalan, Woles, Peter Says Denim, Skaters, dan berbagai merk gahar lainnya mulai memproduksi kaos dengan teknik ini.</p>'
        },
        {
            linkGambar :'/img/polyflex.jpg',
            ling :'/',
            namaSablon :'Sablon Polyflex.',
            artikel :'<p>Ada berbagai-ragam teknik sablon digital, salah satunya yaitu sablon digital polyflex. Apa itu polyflex? Sablon polyflex merupakan teknik sablon yang memakai bahan sejenis stiker atau vinyl yang dipress memakai mesin heat press. Sablon polyflex ini memiliki banyak jenis polyflex serta warna yang bervariasi.</p><p>Polyflex bersifat elastis sehingga lebih tahan lama, awet, kuat, menempel pada kaos dan tahan saat ditarik. Walaupun demikian, bukan berarti kaos tidak mungkin rusak ketika ditarik. Kaos model apapun tentunya perlu dirawat dengan baik agar tetap awet. Banyak pengusaha sablon kaos yang mulai menerapkan sistem ini untuk membuat hasil sablon kaos yang baik.</p><p>Di Indonesia, teknik sablon polyflex dapat dibilang masih tergolong baru dan belum cukup dikenal secara luas. Namun kualitas yang dihasilkan sablon poliflex tidak kalah bagusnya dengan hasil sablon digital lainnya. Bahan polyflex dikenal memiliki kerekatan yang cukup baik. Bahan polyflex juga tidak mudah lepas.</p>'
        }
    ]
    return (
        <div>
            <Layout>
                <br />
                <br />
                <main className="main">
                    {
                        dataSablon.map(ds => (
                            <section id="about" className="about">
                                <div className="container" data-aos="fade-up">
                                    <div className="row">
                                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                            <img src={ds.linkGambar} className="img-fluid" alt=""/>
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                                        <a href={ds.ling} style={{textDecoration: 'none', color: 'black'}}><h3>{ds.namaSablon}</h3></a>
                                            {parse(ds.artikel)}
                                        </div>
                                    </div>
                                </div>
                            </section>        
                        ))
                    }
                </main>    
            </Layout>      
        </div>
    )
}