import React from 'react';
import { StyledInfoBox } from './styles';

export default function InfoBox({
    title,
    information,
    displayIcon,
    colorTheme,
    gridPositions,
}) {
    const icon = displayIcon ? (
        <img src={displayIcon} className='logo' />
    ) : null;
    return (
        <StyledInfoBox colorTheme={colorTheme} gridPositions={gridPositions}>
            <legend>{title}</legend>
            <div>
                {icon}
                <p>{information}</p>
            </div>
        </StyledInfoBox>
    );
}
