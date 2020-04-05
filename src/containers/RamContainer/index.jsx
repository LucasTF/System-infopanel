import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import * as Colors from '../../styles/utils/Colors';

import { FaMemory } from 'react-icons/fa';

export default function RamContainer({ hardware }) {
    const formatBytes = (bytes, roundPoint = 2) => {
        if (bytes === 0) return 0;
        const binaryByte = 1024;
        const binaryCalc = Math.floor(Math.log(bytes) / Math.log(binaryByte));
        return parseFloat(
            (bytes / Math.pow(binaryByte, binaryCalc)).toFixed(roundPoint)
        );
    };

    return (
        <InfoContainer icon={<FaMemory />} title='RAM Information'>
            <InfoBox
                title='Total RAM'
                information={`${formatBytes(hardware.mem.total, 2)} GB`}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 4,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Used RAM'
                information={`${formatBytes(hardware.mem.used, 2)} GB`}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Free RAM'
                information={`${formatBytes(hardware.mem.free, 2)} GB`}
                colorTheme={Colors.OK}
                gridPositions={{
                    gridColumnStart: 5,
                    gridColumnEnd: 6,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
            <InfoBox
                title='Type'
                information={
                    hardware.layout[0].type === 'Unknown'
                        ? 'DDR4'
                        : hardware.layout[0].type
                }
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='RAM Sticks'
                information={hardware.layout.length}
                gridPositions={{
                    gridColumnStart: 2,
                    gridColumnEnd: 3,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Voltage'
                information={`${hardware.layout[0].voltageConfigured}v`}
                gridPositions={{
                    gridColumnStart: 3,
                    gridColumnEnd: 4,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='Clock Speed'
                information={`${hardware.layout[0].clockSpeed} Mhz`}
                gridPositions={{
                    gridColumnStart: 4,
                    gridColumnEnd: 5,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
            <InfoBox
                title='XMP'
                information={
                    hardware.layout[0].clockSpeed > 2666 ? 'ON' : 'OFF'
                }
                colorTheme={
                    hardware.layout[0].clockSpeed > 2666
                        ? Colors.ON
                        : Colors.OFF
                }
                gridPositions={{
                    gridColumnStart: 5,
                    gridColumnEnd: 6,
                    gridRowStart: 2,
                    gridRowEnd: 2,
                }}
            />
        </InfoContainer>
    );
}
