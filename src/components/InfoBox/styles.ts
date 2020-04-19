import styled from 'styled-components';
import IInfoBoxProps from '../../utils/interfaces/IInfoBoxProps';

export const StyledInfoBox = styled.fieldset<IInfoBoxProps>`
	border-radius: 5px;
	border: 3px solid
		${props => (props.colorTheme ? props.colorTheme.mainColor : '#2A2A2A')};
	box-shadow: 3px 3px 15px
		${props =>
			props.colorTheme ? props.colorTheme.secondaryColor : '#2F2F2F'};
	padding: 8px;
	grid-column-start: ${props => props.gridPositions.gridColumnStart};
	grid-column-end: ${props => props.gridPositions.gridColumnEnd};
	grid-row-start: ${props => props.gridPositions.gridRowStart};
	grid-row-end: ${props => props.gridPositions.gridRowEnd};

	legend {
		color: ${props =>
			props.colorTheme ? props.colorTheme.legendColor : '#B4B4B4'};
		padding: 0 8px;
		font-weight: bold;
		font-size: 24px;
	}

	div {
		display: flex;
		justify-content: center;
		font-size: 36px;
		p {
			color: ${props =>
				props.colorTheme ? props.colorTheme.textColor : '#B4B4B4'};
			font-weight: bold;
		}
		img.logo {
			width: 48px;
			padding-right: 8px;
		}
	}
`;
