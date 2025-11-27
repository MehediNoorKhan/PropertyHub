
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'


export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>



    )
}