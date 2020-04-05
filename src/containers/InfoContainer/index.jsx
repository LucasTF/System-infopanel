import React from 'react';
import { StyledInfoContainer } from './styles';
import { IconContext } from 'react-icons';

export default function InfoContainer({ icon, title, children }) {
    const iconLogo = icon ? (
        <IconContext.Provider value={{ className: 'title-icon' }}>
            {icon}
        </IconContext.Provider>
    ) : null;

    return (
        <StyledInfoContainer>
            <div className='title'>
                {iconLogo}
                <h2>{title}</h2>
            </div>
            <div className='content'>{children}</div>
        </StyledInfoContainer>
    );
}
