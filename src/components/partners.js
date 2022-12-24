/**
 * Partners component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql ,Link } from "gatsby"

const Partners = () => {
   const data = useStaticQuery(graphql`
    query partnerQuery {
        allWpPartner {
            edges {
            node {
                title
                partnersLogo {
                partnersImageLogo {
                    mediaItemUrl
                    title
                }
                }
            }
            }
        }
        }
   `)
 
   return (
       <div id="partners" className="partner-section">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>Partners</h2>
                    </div>
                </div>
                <div className="partner-logo-grid">
                    {data.allWpPartner.edges.map(edge => (
                        <div className="logoGrid" key={edge.node.title}>
                            <div className="logoImage">                            
                                <img src={edge.node.partnersLogo.partnersImageLogo.mediaItemUrl} alt="partner-logo"></img>                       
                            </div>
                        </div>
                    ))}
                </div>
                <div className="common-view-more"><Link to="/partners">View More <i className="far fa-angle-right"></i></Link></div>
            </div>                     
       </div>
   )
 }

export default Partners
