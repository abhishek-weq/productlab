import React from 'react';
import Header from '../components/header'
import HomeBanner from '../components/banner'
import Features from '../components/features'
import MultipleChecks from '../components/multipleChecks';
import People from "../components/people"
import Clienteles from "../components/clienteles"
import CaseStudy from '../components/caseStudy'
import Testimonial from '../components/testimonial';
import Partners from '../components/partners'
import FAQs from '../components/faq';
import HomeCTA from '../components/homeCTA'
import Footer from '../components/footer'

const IndexPage = () => (
    <div className='container-fluid'>
        <Header/>
        <HomeBanner/>
        <MultipleChecks/>
        <Features/>
        <Clienteles/>
        <CaseStudy/>
        <Testimonial/>
        <Partners/>
        <People/> 
        <FAQs/> 
        <HomeCTA/>    
        <Footer/>
    </div>
);

export default IndexPage;