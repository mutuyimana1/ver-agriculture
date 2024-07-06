
import img from "../assets/images/pexels-photo-7457178.jpeg"
const OurSteps=()=>{
    return(
        <>
         <section className="steps-area p-relative pb-120 overflow-clip">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                  <div className="wow fadeInLeft animated border-4 border-yellow-500  w-[30rem] border-l-yellow-500 relative p-1 rounded-xl" data-animation="fadeInLeft" data-delay=".4s">
                    <img src={img} alt="class image" className="h-[30rem] w-[30rem] rounded-xl relative left-3 top-5"/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="pl-60">
                    <div className="section-title mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                      <h5>Our Steps</h5>
                      <h2>How We Work On Quality</h2>
                    </div>
                    <ul>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon04.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>Wind Solar Energy</h3>
                            <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon05.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>Forest Planting</h3>
                            <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon06.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>Recycling Agriculture</h3>
                            <p>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default OurSteps