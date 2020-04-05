import React from 'react';
import Head from 'next/head';
import si from 'systeminformation';

import Layout from '../containers/Layout';
import CpuContainer from '../containers/CpuContainer';
import GpuContainer from '../containers/GpuContainer';
import RamContainer from '../containers/RamContainer';

const Index = ({ cpu, gpu, ram }) => {
    return (
        <Layout>
            <Head>
                <title>SystemInfo</title>
            </Head>
            <div className='container'>
                <CpuContainer hardware={cpu} />
                <GpuContainer hardware={gpu} />
                <RamContainer hardware={ram} />
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    let cpuData, gpuData;
    let memoryData = {};
    await si
        .cpu()
        .then((data) => (cpuData = data))
        .catch((error) => console.log(error));
    await si
        .graphics()
        .then((data) => (gpuData = data))
        .catch((error) => console.log(error));
    await si
        .mem()
        .then((data) => (memoryData.mem = data))
        .catch((error) => console.log(error));
    await si
        .memLayout()
        .then((data) => (memoryData.layout = data))
        .catch((error) => console.log(error));
    return { props: { cpu: cpuData, gpu: gpuData, ram: memoryData } };
}

export default Index;
