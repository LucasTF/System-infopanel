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
                    <a href='#os'>Operating System</a>
                </li>
                <li>
                    <a href='#cpu'>CPU</a>
                </li>
                <li>
                    <a href='#gpu'>GPU</a>
                </li>
                <li>
                    <a href='#ram'>RAM</a>
                </li>
                <li>
                    <a href='#mobo'>Motherboard</a>
                </li>
            </ul>
        </StyledNavbar>
    );
}
