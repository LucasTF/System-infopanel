import React from 'react';
import Head from 'next/head';
import si from 'systeminformation';

import Layout from '../containers/Layout';
import CpuContainer from '../containers/CpuContainer';
import GpuContainer from '../containers/GpuContainer';

const Index = ({ cpu, gpu }) => {
    return (
        <Layout>
            <Head>
                <title>SystemInfo</title>
            </Head>
            <div className='container'>
                <CpuContainer hardware={cpu} />
                <GpuContainer hardware={gpu} />
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    let cpuData, gpuData, cpuTemps;
    await si
        .cpu()
        .then((data) => (cpuData = data))
        .catch((error) => console.log(error));
    await si
        .graphics()
        .then((data) => (gpuData = data))
        .catch((error) => console.log(error));
    return { props: { cpu: cpuData, gpu: gpuData } };
}

export default Index;
