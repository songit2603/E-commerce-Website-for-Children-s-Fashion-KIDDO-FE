import React, { Component, Fragment } from 'react';
import {Helmet} from "react-helmet";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/shop-list-left/Content';

const pagelocation = "Shop List Left";

class Shoplistleft extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Kiddo - Thời trang trẻ em | ${pagelocation}`}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </Helmet> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Shoplistleft;