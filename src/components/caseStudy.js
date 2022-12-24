/**
 * Clienteles component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql ,Link} from "gatsby"

const CaseStudy = () => {
   const data1 = useStaticQuery(graphql`
    query caseStudyQuery {
        allWpCaseStudy(limit: 2) {
            edges {
            node {
                uri
                title
                caseStudy {
                microService
                impact
                duration
                fieldGroupName
                companyLogo {
                    sourceUrl
                }
                }
                featuredImage {
                node {
                    sourceUrl
                }
                }
            }
            }
        }
        }
   `)
 
   return (
       <div id="caseStudy" className="case-studies-section">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>Case Studies</h2>
                    </div>
                </div>
                <div className="case-study-grid-data">
                    {data1.allWpCaseStudy.edges.map(edge => (
                        <div className="case-studies-module" key={edge.node.title}>
                            <div className="case-studies-image">
                                <img src={edge.node.featuredImage.node.sourceUrl} alt="case-logo1"/>
                            </div>
                            <div className="case-studeies-content">
                                <img src={edge.node.caseStudy.companyLogo.sourceUrl} className="company-logo" alt="case-logo" />
                                <p className="case-studies-text"><span>Microservice:</span> {edge.node.caseStudy.microService}</p>
                                <p className="case-studies-text"><span>Impact:</span> {edge.node.caseStudy.impact}</p>
                                <p className="case-studies-text"><span>Duration:</span> {edge.node.caseStudy.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <br/>
                <div className="common-view-more"><Link to="/caseStudies">View More <i className="far fa-angle-right"></i></Link></div>
            </div>         
       </div>
   )
 }

export default CaseStudy
