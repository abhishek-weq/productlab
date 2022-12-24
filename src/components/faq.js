import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FAQs = () => {
    
    const data = useStaticQuery(graphql`
        query faqQuery {
            wpPage(id: {eq: "cG9zdDozMA=="}) {
                title
                homepage {
                faqs {
                    faqId
                    question
                    answer
                }
                }
            }
        }
    `)
  
    return (
        <div id="faq" className="faq-section-wrapper">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading-common-wrap">
                        <h2>FAQ</h2>
                    </div>
                </div><br/>
                <div className="faq-accordian-content">
                    <div className="faq-accordion-wrapper">
                        {data.wpPage.homepage.faqs.map(faq => (
                            <div className="accordion-module" key={faq.faqId}>
                                <button className="accordion-title">{faq.question}</button>
                                <div className="panel">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
  }
 
export default FAQs