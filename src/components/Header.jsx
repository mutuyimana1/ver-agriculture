
import { React, useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import BassicModal from "./Modal/Modal";
import LoginForm from "./Forms/LoginForm";
const Header = (() => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header-area header">
        <div id="header-sticky" className="menu-area">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 -mt-4 flex gap-4">
                  <div className="logo w-10 h-10">
                    <Link to="/" className="w-full h-full"><img src={Logo} alt="logo" /></Link>
                  </div>
                  <h1 className="font-bold pt-8 text-xl">Vie et Environment <span className="block text-base">Rwanda</span></h1>
                  
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="main-menu text-right text-xl-right">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/about">About Us</Link></li>
                        <li className="has-sub">
                          <Link to="#">Pages</Link>
                          <ul>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/news">News</Link></li>
                          </ul>
                        </li>
                        <li className="has-sub">
                          <Link to="/project">Projects</Link>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li onClick={showModal}><Link>Login</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block text-right text-xl-right">
                  <div className="login">
                    <ul>
                      <li>
                        <div className="second-header-btn">
                          <Link className="btn">+250-788-704-505</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile-menu" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BassicModal openModal={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={700} component={<div>
          <LoginForm />
        </div>} />
      </header>
    </>
  )
})
export default Header