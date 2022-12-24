import React from 'react';
import { useStaticQuery, graphql} from "gatsby"
import Header from '../components/header'
import Footer from '../components/footer';

const CaseStudiesPage = () => {
    const data1 = useStaticQuery(graphql`
     query allCaseStudyQuery {
         allWpCaseStudy {
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
        <>
        <Header/>
        <div className='case-study-detail-page'>
            <div className="case-studies-section">
                <div className="container">
                    <div className="heading-wrapper">
                        <div className="heading-common-wrap">
                            <h2>Case Studies</h2>
                        </div>
                    </div>
                    <div className="case-study-grid-data">
                        {data1.allWpCaseStudy.edges.map(edge => (
                            <div class="case-studies-module" key={edge.node.title}>
                                <div class="case-studies-image">
                                    <img src={edge.node.featuredImage.node.sourceUrl} alt="case-logo1"/>
                                </div>
                                <div class="case-studeies-content">
                                    <img src={edge.node.caseStudy.companyLogo.sourceUrl} class="company-logo" alt="case-logo" />
                                    <p class="case-studies-text"><span>Microservice:</span> {edge.node.caseStudy.microService}</p>
                                    <p class="case-studies-text"><span>Impact:</span> {edge.node.caseStudy.impact}</p>
                                    <p class="case-studies-text"><span>Duration:</span> {edge.node.caseStudy.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>         
            </div>
        </div>
        <Footer/>
        </>
        
    )
}
 
export default CaseStudiesPage;