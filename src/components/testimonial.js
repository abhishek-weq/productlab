import React , { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const data = useStaticQuery(graphql`
        query testimonialQuery {
            wpPage(id: {eq: "cG9zdDozMA=="}) {
                title
                homepage {
                testimonials {
                    companyName
                    name
                    testimonyContent
                    picture {
                        title
                        mediaItemUrl
                    }
                }
                }
            }
        }
    `)

    //console.log(data)
    const testimonials = data.wpPage.homepage.testimonials;
    

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    var settings1 = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    var settings2 = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect:true,
        swipeToSlide:true,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                vertical:false,
              }
            },
            {
              breakpoint: 991,
              settings: {
                vertical:true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                vertical:false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]  
    };
  
    
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>Testimonial</h2>
                    </div>
                </div>
                <div className="testimonial-slider">
                    <div className="slider1-wrap">
                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings1}>
                            {testimonials.map(testimonial => (
                                <div className="testimonial-data">
                                    <div className="testimonial-inner-data">                               
                                        <div className="img-wrap">
                                            <img src={testimonial.picture.mediaItemUrl} alt="testimonial-img1" />
                                        </div>
                                        <div className="testimonial-content">
                                            <h3 className="title">{testimonial.name}</h3>
                                            <h5 className="designation">{testimonial.companyName}</h5>
                                            <div className="description">
                                                <p>{testimonial.testimonyContent}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="slider2-wrap">
                        <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} {...settings2}>
                            {data.wpPage.homepage.testimonials.map(tdata => (
                                <div className="img-wrap">
                                    <img src={tdata.picture.mediaItemUrl} alt="testimonial-img2" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
  }
 
export default Testimonial