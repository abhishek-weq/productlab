import React from 'react';
import Header from '../components/header'
import Partners from "../components/partners"
import Footer from '../components/footer';

const PartnersPage = () => (
    <div className='container-fluid'>
        <Header/>
        <div className='partner-detail-page'>
            <Partners/>
        </div>
        <Footer/>
    </div>
);

export default PartnersPage;