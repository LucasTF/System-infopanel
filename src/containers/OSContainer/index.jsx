import React from 'react';

import InfoContainer from '../InfoContainer';

import { MdComputer } from 'react-icons/md';

import Windows10Logo from '../../assets/svg/windows10.svg';
import UbuntuLogo from '../../assets/svg/ubuntu.svg';

import InfoBoxBuilder from '../../utils/InfoBoxBuilder';
import * as Color from '../../styles/utils/Colors';

export default function OSContainer({ hardware }) {
	const buildHwObject = hw => {
		let color, logo;
		const dn = hw.distro.toLowerCase();

		if (dn.includes('windows')) {
			color = Color.W10;
			logo = Windows10Logo;
		} else if (dn.includes('ubuntu')) {
			color = Color.UBUNTU;
			logo = UbuntuLogo;
		} else {
			color = null;
			logo = null;
		}

		const relHw = {
			platform: {
				title: 'Platform',
				information: hw.platform,
			},
			distro: {
				title: 'Operating System',
				visible: true,
				displayIcon: logo,
				size: 2,
				colorTheme: color,
				information: hw.distro,
			},
			release: {
				title: 'Version',
				visible: true,
				size: 1,
				information: hw.release,
			},
			codename: {
				title: 'Codename',
				visible: true,
				size: 1,
				information: hw.codename,
			},
			arch: {
				title: 'Architecture',
				visible: true,
				size: 1,
				information: hw.arch,
			},
			hostname: {
				title: 'Hostname',
				visible: true,
				size: 1,
				information: hw.hostname,
			},
			build: {
				title: 'Build',
				visible: true,
				size: 1,
				information: hw.build,
			},
			uefi: {
				title: 'UEFI',
				visible: true,
				size: 1,
				colorTheme: hw.uefi ? Color.ON : Color.OFF,
				information: hw.uefi ? 'YES' : 'NO',
			},
		};

		return relHw;
	};

	return (
		<InfoContainer
			anchor='os'
			icon={<MdComputer />}
			title='Operating System Information'
		>
			{InfoBoxBuilder.build(buildHwObject(hardware))}
		</InfoContainer>
	);
}
