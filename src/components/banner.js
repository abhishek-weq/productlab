/**
 * HomeBanner component that queries for data1
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HomeBanner = () => {

    const data = useStaticQuery(graphql`
        query BannerQuery {
            wpPage(id: {eq: "cG9zdDozMA=="}) {
                title
                homepage {
                    heroTitle
                    heroDescription
                    heroImage {
                        altText
                        mediaItemUrl
                    }
                }
            }
        }
    `)

    // console.log(data)
 
   return (
       <div className="home-banner-wrap">
            <div className="container">
                <div className="banner-main-section">
                    <div className="banner-section">
                        <div className="banner-content-wrap">
                            <h1>{data.wpPage.homepage.heroTitle} <span className="puprple-text">Build</span></h1>
                            <p>{data.wpPage.homepage.heroDescription}</p>
                        </div>
                        <img className="img-fluid animated" src={data.wpPage.homepage.heroImage.mediaItemUrl} alt={data.wpPage.homepage.heroImage.altText}/>
                    </div>
                </div>
            </div>
       </div>
   )
 }

export default HomeBanner
