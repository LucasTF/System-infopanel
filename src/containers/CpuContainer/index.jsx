import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import AmdLogo from '../../assets/svg/amd.svg';

export default function GpuContainer({ hardware }) {
    return (
        <InfoContainer title='CPU Information'>
            <InfoBox
                title='CPU'
                information={hardware.brand}
                displayIcon={AmdLogo}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 3,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Manufacturer'
                information={hardware.manufacturer}
                displayIcon={AmdLogo}
                gridPositions={{
                    gridColumnStart: 3,
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Base Clock'
                information={`${hardware.speedmax}Ghz`}
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
