import React from 'react';
import { StyledInfoContainer } from './styles';
import { IconContext } from 'react-icons';

export default function InfoContainer({
    anchor = null,
    icon,
    title,
    children,
}) {
    const iconLogo = icon ? (
        <IconContext.Provider value={{ className: 'title-icon' }}>
            {icon}
        </IconContext.Provider>
    ) : null;

    if (!children) {
        children = (
            <p className='no-content'>There's no information available.</p>
        );
    }

    return (
        <StyledInfoContainer id={anchor}>
            <div className='title'>
                {iconLogo}
                <h2>{title}</h2>
            </div>
            <div className='content'>{children}</div>
        </StyledInfoContainer>
    );
}
