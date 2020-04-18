import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

import InfoBoxContainer from '../../utils/InfoBoxBuilder';
import * as Colors from '../../styles/utils/Colors';

import { FaMemory } from 'react-icons/fa';
import InfoBoxBuilder from '../../utils/InfoBoxBuilder';

export default function RamContainer({ hardware, osType }) {
    const buildHwObject = (hw, os) => {
        let usedRam, availableRam;
        if (os.toLowerCase().includes('linux')) {
            usedRam = hw.mem.total - hw.mem.available;
            availableRam = hw.mem.available;
        } else {
            usedRam = hw.mem.used;
            availableRam = hw.mem.free;
        }

        const relHw = {
            totalRam: {
                title: 'Total RAM',
                visible: true,
                size: 2,
                information: `${formatBytes(hardware.mem.total, 2)} GB`,
            },
            usedRam: {
                title: 'Used RAM',
                visible: true,
                size: 1,
                information: `${formatBytes(usedRam, 2)} GB`,
            },
            freeRam: {
                title: 'Free RAM',
                visible: true,
                size: 1,
                colorTheme: Colors.OK,
                information: `${formatBytes(availableRam, 2)} GB`,
            },
            type: {
                title: 'Type',
                visible: true,
                size: 1,
                information: hw.layout[0].type,
            },
            sticks: {
                title: 'RAM Sticks',
                visible: true,
                size: 1,
                information: hw.layout.length,
            },
            voltage: {
                title: 'Voltage',
                visible: hw.layout[0].voltageConfigured !== -1,
                size: 1,
                information: `${hw.layout[0].voltageConfigured}v`,
            },
            clock: {
                title: 'Clock Speed',
                visible: hw.layout[0].clockSpeed !== 0,
                size: 1,
                information: `${hw.layout[0].clockSpeed}Mhz`,
            },
            xmp: {
                title: 'XMP',
                visible: hw.layout[0].clockSpeed !== 0,
                size: 1,
                colorTheme:
                    hw.layout[0].clockSpeed > 2666 ? Colors.ON : Colors.OFF,
                information: hw.layout[0].clockSpeed > 2666 ? 'YES' : 'NO',
            },
        };

        return relHw;
    };

    const formatBytes = (bytes, roundPoint = 2) => {
        if (bytes === 0) return 0;
        const binaryByte = 1024;
        const binaryCalc = Math.floor(Math.log(bytes) / Math.log(binaryByte));
        return parseFloat(
            (bytes / Math.pow(binaryByte, binaryCalc)).toFixed(roundPoint)
        );
    };

    return (
        <InfoContainer anchor='ram' icon={<FaMemory />} title='RAM Information'>
            {InfoBoxBuilder.build(buildHwObject(hardware, osType))}
        </InfoContainer>
    );
}
