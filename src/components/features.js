/**
 * Features component that queries for data1
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Features = () => {

    const data = useStaticQuery(graphql`
        query featureQuery {
            wpPage {
                title
                homepage {
                    features {
                        featureTitle
                        featureIcon {
                        sourceUrl
                        title
                        }
                    }
                }
            }
        }
    `)
 
   return (
       <div id="features" className="features-wrap">
            <div className="container">
                <div className="row">
                    <div className="features-section">
                        <div className="feature-wrapper">
                            <div className="heading-wrapper">
                                <div className="heading-common-wrap">
                                    <h2>Features/Why Product Labs</h2>
                                </div>
                            </div>
                            <div className="feature-inner-wrap">
                                {data.wpPage.homepage.features.map(feature => (
                                    <div className="feature-module" key={feature.featureIcon.title}>
                                        <img src={feature.featureIcon.sourceUrl} alt={feature.featureIcon.title}/>
                                        <p>{feature.featureTitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   )
 }

export default Features
