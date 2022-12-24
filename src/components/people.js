/**
 * People component that queries for data1
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 const People = () => {
    const data1 = useStaticQuery(graphql`
        query peopleQuery1 {
            allWpPeople {
                edges {
                    node {
                    people {
                        description
                        designation
                        peopleImage {
                            mediaItemUrl
                        }
                    }
                    title
                    uri
                    id
                    }
                }
            }
        }
    `)

    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },            
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]  
    };
  
    return (
        <div id="people" className="people-section-wrapper">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>People</h2>
                    </div>
                </div>
                <div className="peopleListBlock">
                    <Slider {...settings}>
                        {data1.allWpPeople.edges.map(edge => (
                            <div className="peopleGrid" key={edge.node.id}>
                                <div className="peopleImage">
                                    <img src={edge.node.people.peopleImage.mediaItemUrl} alt={edge.node.title}></img>
                                </div>
                                <div className="peopleContent">
                                    <h4 className="title">{edge.node.title}</h4>
                                    <div className="description">
                                        <p className="designation">{edge.node.people.designation}</p>
                                        <p className="about-people">{edge.node.people.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
  }
 
export default People
