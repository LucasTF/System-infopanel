import React from 'react';
import { StyledInfoContainer } from './styles';
import { FiCpu } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export default function InfoContainer({ title, children }) {
    return (
        <StyledInfoContainer>
            <div className='title'>
                <IconContext.Provider value={{ className: 'cpu-icon' }}>
                    <FiCpu />
                </IconContext.Provider>
                <h2>{title}</h2>
            </div>
            <div className='content'>{children}</div>
        </StyledInfoContainer>
    );
}
