import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import { GiProcessor } from 'react-icons/gi';
import NvidiaLogo from '../../assets/svg/nvidia.svg';

import * as Color from '../../styles/utils/Colors';

export default function GpuContainer({ hardware }) {
    return (
        <InfoContainer icon={<GiProcessor />} title='GPU Information'>
            <InfoBox
                title='GPU'
                information={hardware.controllers[0].model}
                displayIcon={NvidiaLogo}
                colorTheme={Color.NVIDIA}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Manufacturer'
                information={hardware.controllers[0].vendor}
                displayIcon={NvidiaLogo}
                colorTheme={Color.NVIDIA}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='VRAM'
                information={`${hardware.controllers[0].vram} MB`}
                colorTheme={Color.NVIDIA}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Display Resolution'
                information={`${hardware.displays[0].resolutionx}x${hardware.displays[0].resolutiony}`}
                colorTheme={Color.NVIDIA}
                gridPositions={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Refresh Rate'
                information={`${hardware.displays[0].currentRefreshRate}hz`}
                colorTheme={Color.NVIDIA}
                gridPositions={{
                    gridColumnStart: 3,
                    gridColumnEnd: 4,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Connector'
                information={hardware.displays[0].connection}
                colorTheme={Color.NVIDIA}
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
