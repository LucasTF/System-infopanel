import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import { MdComputer } from 'react-icons/md';

import Windows10Logo from '../../assets/svg/windows10.svg';

import * as Color from '../../styles/utils/Colors';

export default function OSContainer({ hardware }) {
    return (
        <InfoContainer
            anchor='os'
            icon={<MdComputer />}
            title='Operating System Information'
        >
            <InfoBox
                title='Operating System'
                information={hardware.distro}
                displayIcon={Windows10Logo}
                colorTheme={Color.W10}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Build'
                information={hardware.build}
                gridPositions={{
                    gridColumnStart: 3,
                    gridColumnEnd: 4,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Architecture'
                information={hardware.arch}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
        </InfoContainer>
    );
}
