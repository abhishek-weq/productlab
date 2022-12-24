/**
 * Clienteles component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql ,Link } from "gatsby"

const Clienteles = () => {
   const data = useStaticQuery(graphql`
    query clientQuery {
        allWpClientele {
        edges {
            node {
            clientCompanyLogo {
                clientCompanyLogoImage {
                sourceUrl
                mediaItemUrl
                }
            }
            id
            }
        }
        }
    }
   `)
 
   return (
       <div className="clientele-section">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>Clientele</h2>
                    </div>
                </div>
                <div className="client-logo-grid">
                    {data.allWpClientele.edges.map(edge => (
                        <div className="logoGrid" key={edge.node.id}>
                            <div className="logoImage">                            
                                <img src={edge.node.clientCompanyLogo.clientCompanyLogoImage.sourceUrl} alt="logo"></img>                       
                            </div>
                        </div>
                    ))}
                </div>
                <div className="common-view-more"><Link to="/clienteles">View More <i className="far fa-angle-right"></i></Link></div>
            </div>                     
       </div>
   )
 }

export default Clienteles
