import React from 'react';

import InfoContainer from '../InfoContainer';

import { GiProcessor } from 'react-icons/gi';
import NvidiaLogo from '../../assets/svg/nvidia.svg';
import AmdLogo from '../../assets/svg/amd.svg';
import IntelLogo from '../../assets/svg/intel.svg';

import InfoBoxBuilder from '../../utils/InfoBoxBuilder';
import * as Color from '../../styles/utils/Colors';

export default function GpuContainer({ hardware }) {
	const buildHwObject = hw => {
		let logo = null,
			color = null;
		const vendor = hardware.controllers[0].vendor.toLowerCase();
		if (vendor.includes('nvidia')) {
			logo = NvidiaLogo;
			color = Color.NVIDIA;
		} else if (vendor.includes('amd')) {
			logo = AmdLogo;
			color = Color.AMD;
		} else if (vendor.includes('intel')) {
			logo = IntelLogo;
			color = Color.INTEL;
		}

		const relHw = {
			model: {
				title: 'GPU',
				visible: true,
				displayIcon: logo,
				colorTheme: color,
				size: 3,
				information: hardware.controllers[0].model,
			},
			manufacturer: {
				title: 'Manufacturer',
				visible: true,
				displayIcon: logo,
				colorTheme: color,
				size: 1,
				information: hardware.controllers[0].vendor,
			},
			vram: {
				title: 'VRAM',
				visible: hardware.controllers[0].vram !== 0,
				colorTheme: color,
				size: 1,
				information: `${hardware.controllers[0].vram} MB`,
			},
			displayres: {
				title: 'Display Resolution',
				visible: true,
				colorTheme: color,
				size: 1,
				information: `${hardware.displays[0].resolutionx}x${hardware.displays[0].resolutiony}`,
			},
			refresh: {
				title: 'Refresh Rate',
				visible: true,
				colorTheme: color,
				size: 1,
				information: `${hardware.displays[0].currentRefreshRate}hz`,
			},
			connector: {
				title: 'Connector',
				visible: true,
				colorTheme: color,
				size: 1,
				information: hardware.displays[0].connection,
			},
		};
		return relHw;
	};

	return (
		<InfoContainer
			anchor='gpu'
			icon={<GiProcessor />}
			title='GPU Information'
		>
			{InfoBoxBuilder.build(buildHwObject(hardware))}
		</InfoContainer>
	);
}
