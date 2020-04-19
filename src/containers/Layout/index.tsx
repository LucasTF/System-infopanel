import React from 'react';
import Head from 'next/head';

import { GlobalContainer } from '../../styles/global';
import Navbar from '../../components/Navbar';

import { StyledLayout } from './styles';

export default function Layout(props) {
    return (
        <StyledLayout>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' />
            </Head>
            <Navbar />
            {props.children}
            <GlobalContainer />
        </StyledLayout>
    );
}
