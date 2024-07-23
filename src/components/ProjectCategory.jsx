import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Base_url } from "../Services/Constants";
import DOMPurify from "dompurify";

const ProjectCategory=(props)=>{
    const [projectData, setProjectsData] = useState(null);
    const [agricultureData, setAgricultureData] = useState(null);
    const [erosionData, setErosionData] = useState(null);
    const [environmentData, setEnvironmentData] = useState(null);
    const [forestData, setForestData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [projectCategory, setProjectCategory] = useState("all")
    async function fetchData() {
      try {
        setIsFetching(true)
        const response = await fetch('/api/items/projects?fields=*.*');
        console.log("responses",response)
        if (!response.ok) {
          setIsFetching(false)
          throw new Error('Network response was not ok');
        }else{
          setIsFetching(false)
          const data = await response.json();
          console.log(data, "data");
          return data.data; 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
    async function fetchAgricultureData() {
      try {
        setIsFetching(true)
        const response = await fetch('/api/items/projects?filter={ "category": { "_eq": "1" }}');
        console.log("responses",response)
        if (!response.ok) {
          setIsFetching(false)
          throw new Error('Network response was not ok');
        }else{
          setIsFetching(false)
          const data = await response.json();
          console.log(data, "data");
          return data.data; 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
  
    useEffect(() => {
      fetchData().then(data => {
        setProjectsData(data);
      });
    }, []);
    async function fetchErosionData() {
      try {
        setIsFetching(true)
        const response = await fetch('/api/items/projects?filter={ "category": { "_eq": "3" }}');
        console.log("responses",response)
        if (!response.ok) {
          setIsFetching(false)
          throw new Error('Network response was not ok');
        }else{
          setIsFetching(false)
          const data = await response.json();
          console.log(data, "data");
          return data.data; 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
  
    useEffect(() => {
      fetchErosionData().then(data => {
        setErosionData(data);
      });
    }, []);
    async function fetchEnvironmentData() {
      try {
        setIsFetching(true)
        const response = await fetch('/api/items/projects?filter={ "category": { "_eq": "2" }}');
        console.log("responses",response)
        if (!response.ok) {
          setIsFetching(false)
          throw new Error('Network response was not ok');
        }else{
          setIsFetching(false)
          const data = await response.json();
          console.log(data, "data");
          return data.data; 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
  
    useEffect(() => {
      fetchEnvironmentData().then(data => {
        setEnvironmentData(data);
      });
    }, []);
    async function fetchForestData() {
      try {
        setIsFetching(true)
        const response = await fetch('/api/items/projects?filter={ "category": { "_eq": "4" }}');
        console.log("responses",response)
        if (!response.ok) {
          setIsFetching(false)
          throw new Error('Network response was not ok');
        }else{
          setIsFetching(false)
          const data = await response.json();
          console.log(data, "data");
          return data.data; 
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
  
    useEffect(() => {
      fetchForestData().then(data => {
        setForestData(data);
      });
    }, []);
    useEffect(() => {
      fetchAgricultureData().then(data => {
        setAgricultureData(data);
      });
    }, []);
 
    const handleShowProjectDetails = (data) => {
      props?.setDetailedData(data)
      props?.setProjectsDetails(true); 
      console.log("AgricultureData from home", data);
    };
    const createMarkup = (html) => {
      return { __html: DOMPurify.sanitize(html) };
    };
    return(
        <>
        <section id="portfolio" className="pt-120 pb-90">
            <div className="container">
              <div className="portfolio ">
                <div className="row align-items-end mb-50">
                  <div className="col-lg-12">
                    <div className="section-title text-center wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
                      <h5>Explore Projects</h5>
                      <h2>
                        Our Recent Projects
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row align-items-end mb-50">
                  <div className="col-lg-12">
                    <div className="my-masonry text-center wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                      <div className="button-group filter-button-group">
                        <button className={`${projectCategory === "all"?"active":""}`} data-filter="*" onClick={() => setProjectCategory("all")}>View All</button>
                        <button className={`${projectCategory === "erosion"?"active":""}`} data-filter=".financial" onClick={() => setProjectCategory("erosion")}>Erosion</button>
                        <button className={`${projectCategory === "agriculture"?"active":""}`}  data-filter=".banking" onClick={() => setProjectCategory("agriculture")}>Agriculture</button>
                        <button  className={`${projectCategory === "forest"?"active":""}`} data-filter=".insurance" onClick={() => setProjectCategory("forest")}>Forest </button>
                        <button  className={`${projectCategory === "environment"?"active":""}`} data-filter=".insurance" onClick={() => setProjectCategory("environment")}>Environment </button>
                      </div>
                    </div>
                  </div>
                </div>
                {projectCategory === "all" && <div className="row">
                  {projectData?.slice(0, 3)?.map((el) => {
                    console.log("Base_url}/assets/${el?.image?.id}",`${Base_url}/assets/${el?.image?.id}`)
                    return (
                      <>
                           
                            <div className="col-lg-4 col-md-6 cursor-pointer"  onClick={() => handleShowProjectDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden shadow-md">
                              <a href="#"><img src={`${Base_url}/assets/${el?.image?.id}`} alt="img" className="w-full h-full"/></a>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              {el?.descriptions?.length > 100? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 100))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "erosion" && <div className="row">
                  {erosionData?.slice(0, 3)?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 cursor-pointer" onClick={() => handleShowProjectDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                            <img src={`${Base_url}/assets/${el?.image}`} alt="img" className="w-full h-full"/>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              {el?.descriptions?.length > 100? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 100))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "agriculture" && <div className="row">
                  {agricultureData?.slice(0, 3)?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 cursor-pointer" onClick={() => handleShowProjectDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                              <a href="#"><img src={`${Base_url}/assets/${el?.image}`} alt="img" className="w-full h-full"/></a>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              {el?.descriptions?.length > 100? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 100))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "forest" && <div className="row">
                  {forestData?.slice(0, 3)?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 cursor-pointer" onClick={() => handleShowProjectDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                             <img src={`${Base_url}/assets/${el?.image}`} alt="img" className="w-full h-full"/>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              {el?.descriptions?.length > 100? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 100))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}
                {projectCategory === "environment" && <div className="row">
                  {environmentData?.slice(0, 3)?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 cursor-pointer" onClick={() => handleShowProjectDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                            
                             <img src={`${Base_url}/assets/${el?.image}`} alt="img" className="w-full h-full"/>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              {el?.descriptions?.length > 100? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 100))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
                </div>}

              </div>
              <div className="second-header-btn float-right">
                <Link to={"/project"} className="btn">View More</Link>
              </div>
            </div>
          </section>
        </>
    )
}
export default ProjectCategory