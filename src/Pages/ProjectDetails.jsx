import Footer from "../components/Footer"
import Header from "../components/Header"
import { Base_url } from "../Services/Constants"

const ProjectDetail = ((props) => {
  console.log("propssss data",props?.data)
    return (
        <>
         <main>
  {/* service-details-area */}
  <div className="about-area5 about-p p-relative">
    <div className="container pt-120 pb-90">
        <div className="col-lg-12 order-1">
          <div className="service-detail">
            <div className="content-box">
              <h2 className="capitalize"> {props?.data?.title} </h2>
              {/* Two Column */}
              <div className="two-column">
                <div className="row">
                  <div className="text-column col-xl-6 col-lg-12 col-md-12">
                    <img src={`${Base_url}/assets/${props?.data?.image?.id}`} alt />
                  </div>
                </div>
              </div>
              <p className="pt-5"> {props?.data?.descriptions} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* service-details-area-end */}
</main>
        </>
    )
})
export default ProjectDetail