import { GalleryData } from "../assets/Data/Gallery"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Gallery=()=>{
    return(
        <div className="bg-yellow-50 ">
        <Header/>
     <section className="flex pt-20 flex-col justify-center my-20  items-center w-full ">

  <div className="flex flex-wrap mx-auto md:flex-nowrap  m-auto w-[90%] py-4">
    {GalleryData?.map((el)=>{
        return(
            <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
            <article className="mx-auto   rounded-3xl overflow-hidden  bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative   transform duration-500   group" style={{backgroundImage: `url(${el?.img})`}}>
              <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
                <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                  <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 capitalize"> {el?.descripyions}</p>
                </div>
              </div>
            </article>
          </div>
        )
    })}
  </div>
</section>
<Footer/>
        </div>
    )
}
export default Gallery