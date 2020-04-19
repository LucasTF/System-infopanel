import React from 'react';
import { StyledHwButton } from './styles';

export default function HwButton({ title, icon, onClick }) {
	return (
		<StyledHwButton onClick={onClick}>
			{icon}
			<p>{title}</p>
		</StyledHwButton>
	);
}
