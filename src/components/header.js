/**
 * Header component that queries for data1
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import MyImage from '../../content/assets/logo.png'
import "../css/style1.css";
import "../css/custom-file.css";
import "../css/responsive.css"

const Header = () => {

    const menu = useStaticQuery(graphql`
        query headerQuery {
            wpMenu(name: {eq: "Header"}) {
                id
                menuItems {
                    nodes {
                        label
                        id
                        url
                    }
                }
            }
        }
    `)

 
   return (  
       <div className="application">
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.slim.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </Helmet>
            <div className="header-wrapper">
                <nav className="navbar sticky-top navbar-expand-lg header-section">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={MyImage} alt="Logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                {menu.wpMenu.menuItems.nodes.map(mainItem => (
                                    <li className="nav-item" key={mainItem.label}>                                  
                                        <AnchorLink  className="nav-link" to={`/`+mainItem.url}>{mainItem.label}</AnchorLink >
                                    </li>
                                ))}                          
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
       </div>
   )
 }

export default Header
