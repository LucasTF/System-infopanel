import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import { GiProcessor } from 'react-icons/gi';
import NvidiaLogo from '../../assets/svg/nvidia.svg';
import AmdLogo from '../../assets/svg/amd.svg';
import IntelLogo from '../../assets/svg/intel.svg';

import * as Color from '../../styles/utils/Colors';

export default function GpuContainer({ hardware }) {
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

	return (
		<InfoContainer
			anchor="gpu"
			icon={<GiProcessor />}
			title="GPU Information"
		>
			<InfoBox
				title="GPU"
				information={hardware.controllers[0].model}
				displayIcon={logo}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 1,
					gridColumnEnd: 4,
					gridRowStart: 1,
					gridRowEnd: 1,
				}}
			/>
			<InfoBox
				title="Manufacturer"
				information={hardware.controllers[0].vendor}
				displayIcon={logo}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 4,
					gridColumnEnd: 5,
					gridRowStart: 1,
					gridRowEnd: 1,
				}}
			/>
			<InfoBox
				title="VRAM"
				information={`${hardware.controllers[0].vram} MB`}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 1,
					gridColumnEnd: 2,
					gridRowStart: 2,
					gridRowEnd: 2,
				}}
			/>
			<InfoBox
				title="Display Resolution"
				information={`${hardware.displays[0].resolutionx}x${hardware.displays[0].resolutiony}`}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 2,
					gridColumnEnd: 3,
					gridRowStart: 2,
					gridRowEnd: 2,
				}}
			/>
			<InfoBox
				title="Refresh Rate"
				information={`${hardware.displays[0].currentRefreshRate}hz`}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 3,
					gridColumnEnd: 4,
					gridRowStart: 2,
					gridRowEnd: 2,
				}}
			/>
			<InfoBox
				title="Connector"
				information={hardware.displays[0].connection}
				colorTheme={color}
				gridPositions={{
					gridColumnStart: 4,
					gridColumnEnd: 5,
					gridRowStart: 2,
					gridRowEnd: 2,
				}}
			/>
		</InfoContainer>
	);
}
