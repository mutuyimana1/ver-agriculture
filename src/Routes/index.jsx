import { React } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import AboutUs from "../Pages/aboutUs"
import ContactUs from "../Pages/ContactUs"
import Projects from "../Pages/Projects"
import Gallery from "../Pages/Gallery"

const Index = (() => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/project" element={<Projects />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </Router>
        </>
    )
})
export default Index