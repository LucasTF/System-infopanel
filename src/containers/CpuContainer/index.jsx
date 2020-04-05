import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import { FiCpu } from 'react-icons/fi';
import AmdLogo from '../../assets/svg/amd.svg';
import IntelLogo from '../../assets/svg/intel.svg';

import * as Colors from '../../styles/utils/Colors';

export default function GpuContainer({ hardware }) {
    let logo, colorTheme;

    if (hardware.manufacturer === 'Intel') {
        logo = IntelLogo;
        colorTheme = Colors.INTEL;
    } else {
        logo = AmdLogo;
        colorTheme = Colors.AMD;
    }

    return (
        <InfoContainer icon={<FiCpu />} title='CPU Information'>
            <InfoBox
                title='CPU'
                information={hardware.brand}
                displayIcon={logo}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Manufacturer'
                information={hardware.manufacturer}
                displayIcon={logo}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Base Clock'
                information={`${hardware.speedmax}Ghz`}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Cores'
                information={hardware.physicalCores}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Threads'
                information={hardware.cores}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 3,
                    gridColumnEnd: 4,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Socket'
                information={hardware.socket}
                colorTheme={colorTheme}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
        </InfoContainer>
    );
}
