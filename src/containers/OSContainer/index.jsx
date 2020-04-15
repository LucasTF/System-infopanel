import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import { MdComputer } from 'react-icons/md';

import Windows10Logo from '../../assets/svg/windows10.svg';
import UbuntuLogo from '../../assets/svg/ubuntu.svg';

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

	const buildInfoContainer = hw => {
		const relHw = buildHwObject(hw);
		const infoBoxArr = [];
		const rows = [1, 1, 1, 1, 1];
		const maxColumns = 5;

		for (let key of Object.keys(relHw)) {
			if (relHw[key].information && relHw[key].visible) {
				const rowIndex = rows.findIndex(
					row => row + relHw[key].size <= maxColumns
				);
				infoBoxArr.push(
					<InfoBox
						key={key}
						title={relHw[key].title}
						information={relHw[key].information}
						displayIcon={relHw[key].displayIcon}
						colorTheme={relHw[key].colorTheme}
						gridPositions={{
							gridColumnStart: rows[rowIndex],
							gridColumnEnd: rows[rowIndex] + relHw[key].size,
							gridRowStart: rowIndex + 1,
							gridRowEnd: rowIndex + 1,
						}}
					/>
				);
				rows[rowIndex] += relHw[key].size;
			}
		}
		infoBoxArr[
			infoBoxArr.length - 1
		].props.gridPositions.gridColumnEnd = maxColumns;
		return infoBoxArr;
	};

	return (
		<InfoContainer
			anchor='os'
			icon={<MdComputer />}
			title='Operating System Information'
		>
			{buildInfoContainer(hardware)}
		</InfoContainer>
	);
}
