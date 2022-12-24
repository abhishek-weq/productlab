  /**
 * Footer component that queries for data1
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import MyImage from '../../content/assets/logo.png'

const Footer = () => {
 
   return (
    <div className="footer">
      <div className="container">
        <div className="row">
            <div className="footer-main-wrap">
                <div className="footer-modules footer-module1">
                    <img src={MyImage} alt="Productlab Logo" />
                    <p>41112 Del Rey Ave
                        Marina Del Rey,<br/>
                        CA 90292, USA</p>
                </div>
                <div className="footer-modules footer-module2">
                    <ul>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Case study</a></li>
                    </ul>
                </div>
                <div className="footer-modules footer-module3">
                    <ul>
                        <li><a href="/">Testimonials</a></li>
                        <li><a href="/">Teams</a></li>
                        <li><a href="/">FAQ</a></li>
                    </ul>
                </div>
                
                <div className="footer-modules footer-module4">
                    <div className="social-icons">
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-f" aria-label="facebook"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram" aria-label="instagram"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter" aria-label="twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-contact-details">
                        <p className="footer-number">Contact: <a href="tel:+1 (415) 555-2671">+1 (415) 555-2671</a></p>
                        <p className="fotter-mail">E-mail ID: <a href="mailto:help@productlabs.com">help@productlabs.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    <div className="credit-bar-section">
        <div className="row">
            <div className="credeit-bar-wrap">
                <p className="reserved-text">© All Rights Reserved</p>
                <div className="policy-page-wrap">
                    <a href="/">Privacy policy</a> |
                    <a href="/">Terms &amp; Conditions</a>
                </div>
                <a href="/">Designed and Developed by WEQ Technologies</a>
            </div>
        </div>
    </div>
  </div>
  </div>
   )
 }

export default Footer
