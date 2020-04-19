import React from 'react';

import InfoContainer from '../InfoContainer';

import { FiCpu } from 'react-icons/fi';
import AmdLogo from '../../assets/svg/amd.svg';
import IntelLogo from '../../assets/svg/intel.svg';

import InfoBoxBuilder from '../../utils/InfoBoxBuilder';
import * as Colors from '../../styles/utils/Colors';

export default function CpuContainer({ hardware }) {
	const buildHwObject = hw => {
		let logo, color;

		if (hardware.manufacturer.toLowerCase().includes('intel')) {
			logo = IntelLogo;
			color = Colors.INTEL;
		} else {
			logo = AmdLogo;
			color = Colors.AMD;
		}

		const relHw = {
			cpu: {
				title: 'CPU',
				visible: true,
				displayIcon: logo,
				colorTheme: color,
				size: 2,
				information: hw.brand,
			},
			manufacturer: {
				title: 'Manufacturer',
				visible: true,
				displayIcon: logo,
				colorTheme: color,
				size: 2,
				information: hw.manufacturer,
			},
			baseClock: {
				title: 'Base Clock',
				visible: true,
				colorTheme: color,
				size: 1,
				information: `${hw.speedmax}Ghz`,
			},
			cores: {
				title: 'Cores',
				visible: true,
				colorTheme: color,
				size: 1,
				information: hw.physicalCores,
			},
			threads: {
				title: 'Threads',
				visible: true,
				colorTheme: color,
				size: 1,
				information: hw.cores,
			},
			socket: {
				title: 'Socket',
				visible: hw.socket,
				colorTheme: color,
				size: 1,
				information: hw.socket,
			},
		};

		return relHw;
	};

	return (
		<InfoContainer anchor='cpu' icon={<FiCpu />} title='CPU Information'>
			{InfoBoxBuilder.build(buildHwObject(hardware))}
		</InfoContainer>
	);
}
