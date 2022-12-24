import React from 'react';
import Header from '../components/header'
import Clienteles from "../components/clienteles"
import Footer from '../components/footer';

const ClientelePage = () => (
    <div className='container-fluid'>
        <Header/>
        <div className='client-detail-page'>
            <Clienteles/>
        </div>
        <Footer/>
    </div>
);

export default ClientelePage;