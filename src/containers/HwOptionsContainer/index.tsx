import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FiCpu } from 'react-icons/fi';
import { GiProcessor } from 'react-icons/gi';
import { FaMemory } from 'react-icons/fa';

import HwButton from '../../components/HwButton';

import { StyledHwOptionsContainer } from './styles';

export default function HwOptionsContainer({ selectHardware }) {
	return (
		<StyledHwOptionsContainer>
			<HwButton
				title='OS'
				icon={<MdComputer />}
				onClick={() => selectHardware('os')}
			/>
			<HwButton
				title='CPU'
				icon={<FiCpu />}
				onClick={() => selectHardware('cpu')}
			/>
			<HwButton
				title='GPU'
				icon={<GiProcessor />}
				onClick={() => selectHardware('gpu')}
			/>
			<HwButton
				title='RAM'
				icon={<FaMemory />}
				onClick={() => selectHardware('ram')}
			/>
		</StyledHwOptionsContainer>
	);
}
