import React from 'react';
import Head from 'next/head';
import si from 'systeminformation';

import Layout from '../containers/Layout';
import CpuContainer from '../containers/CpuContainer';
import GpuContainer from '../containers/GpuContainer';
import RamContainer from '../containers/RamContainer';
import OSContainer from '../containers/OSContainer';

const Index = ({ cpu, gpu, ram, os }) => {
	return (
		<Layout>
			<Head>
				<title>SystemInfo</title>
			</Head>
			<div className='container'>
				<OSContainer hardware={os} />
				<CpuContainer hardware={cpu} />
				<GpuContainer hardware={gpu} />
				<RamContainer hardware={ram} />
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	const computerData = await Promise.all([
		si.cpu(),
		si.graphics(),
		si.mem(),
		si.memLayout(),
		si.osInfo(),
	])
		.then(data => {
			let modifiedData = {};
			modifiedData.cpu = data[0];
			modifiedData.gpu = data[1];
			modifiedData = {
				...modifiedData,
				ram: { mem: data[2], layout: data[3] },
			};
			modifiedData.os = data[4];
			return modifiedData;
		})
		.catch(error => {
			console.log(error);
		});
	return { props: { ...computerData } };
}

export default Index;
