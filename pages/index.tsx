import React, { useState } from 'react';
import Head from 'next/head';
import si from 'systeminformation';

import Layout from '../src/containers/Layout';
import HwOptionsContainer from '../src/containers/HwOptionsContainer';
import CpuContainer from '../src/containers/CpuContainer';
import GpuContainer from '../src/containers/GpuContainer';
import RamContainer from '../src/containers/RamContainer';
import OSContainer from '../src/containers/OSContainer';

interface IRam {
	mem: Object;
	layout: Object[];
}

interface IComputerData {
	cpu: Object;
	gpu: Object;
	ram: IRam;
	os: Object;
}

const Index = ({ cpu, gpu, ram, os }) => {
	const [hardware, setHardware] = useState(null);

	const selectHardwareHandler = (hw: string) => {
		let selectedHw: JSX.Element;
		switch (hw) {
			case 'os':
				selectedHw = <OSContainer hardware={os} />;
				break;
			case 'cpu':
				selectedHw = <CpuContainer hardware={cpu} />;
				break;
			case 'gpu':
				selectedHw = <GpuContainer hardware={gpu} />;
				break;
			case 'ram':
				selectedHw = (
					<RamContainer hardware={ram} osType={os.platform} />
				);
				break;
			default:
				selectedHw = null;
		}
		setHardware(selectedHw);
	};

	return (
		<Layout>
			<Head>
				<title>SystemInfo</title>
			</Head>
			<div className='container'>
				<HwOptionsContainer selectHardware={selectHardwareHandler} />
				{hardware ? (
					hardware
				) : (
					<h2 className='default-msg'>
						Select a system part to get information.
					</h2>
				)}
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
			const modifiedData: IComputerData = {
				cpu: data[0],
				gpu: data[1],
				ram: {
					mem: data[2],
					layout: data[3],
				},
				os: data[4],
			};
			return modifiedData;
		})
		.catch(error => {
			console.log(error);
		});
	return { props: { ...computerData } };
}

export default Index;
