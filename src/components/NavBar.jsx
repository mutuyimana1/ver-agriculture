
import { React ,useState, useRef  } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
const NavBar = (() => {
    const [scrollPosition, setScrollPosition] = useState({ scrollTop: 10});
  const scrollDemoRef = useRef(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop} = scrollDemoRef.current;
      setScrollPosition({ scrollTop});
    }
  };
  console.log("scrollPosition",scrollPosition)
    return (
        <>
        <div className="flex justify-between bg-white rounded-full px-10 py-4 mx-64"   id="scrollDemo"
        ref={scrollDemoRef}  onScroll={handleScroll}>
        <div className="w-16 h-16">
        <img src={Logo} alt="" className="w-full h-full"/>
       </div>
       <div className="flex gap-7">
       <ul className="flex gap-7 items-center justify-center">
        <li className="text-base font-medium"> <Link to={"/"}>Home</Link> </li>
        <li className="text-base font-medium"> <Link to={"/"}>About Us</Link> </li>
        <li className="text-base font-medium"> <Link to={"/"}>Services</Link> </li>
        <li className="text-base font-medium"> <Link to={"/"}>Pages</Link> </li>
        <li className="text-base font-medium"> <Link to={"/"}>Blog</Link> </li>
        <li className="text-base font-medium"> <Link to={"/"}>Contact Us</Link> </li>
       </ul>
       <div className="flex justify-center items-center bg-[#fdcc0d] rounded-full px-8">
        <button>+0785877463</button>
       </div>
       </div>
        </div>
        </>
    )
})
export default NavBar