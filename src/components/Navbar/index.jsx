import React from 'react';
import { FaMicrochip } from 'react-icons/fa';
import { StyledNavbar } from './styles';

export default function Navbar() {
    return (
        <StyledNavbar>
            <div className='logo-container'>
                <FaMicrochip />
                <p>SystemInfo</p>
            </div>
            <ul>
                <li>
                    <a>CPU</a>
                </li>
                <li>GPU</li>
                <li>RAM</li>
                <li>Sistema Operacional</li>
            </ul>
        </StyledNavbar>
    );
}
