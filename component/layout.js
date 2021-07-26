import Header from '../component/header'
import Head from 'next/head'
import Footer from '../component/footer'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Gp Bootstrap Template - Index</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}