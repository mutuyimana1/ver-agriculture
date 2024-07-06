import { ActivitiesData } from "../assets/Data/Activities"
const Activities = () => {
    return (
        <>
            <div className="row align-items-center justify-content-center">
                {ActivitiesData?.map((el) => {
                    return (
                        <div className="col-lg-4">
                            <div className="services-box-05 mb-30 hover-zoomin wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="services-icon-05">
                                    <a href="single-service.html"><img src={el?.img} alt="icon01" /></a>
                                </div>
                                <div className="services-content-05">
                                    <div className="icon">
                                        <h4> <a href="single-service.html"></a> {el?.title}</h4>
                                    </div>
                                    <p>{el?.discriptions}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Activities