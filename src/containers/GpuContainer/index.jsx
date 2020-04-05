import React from 'react';

import InfoContainer from '../InfoContainer';
import InfoBox from '../../components/InfoBox';

export default function GpuContainer({ hardware }) {
    return (
        <InfoContainer title='GPU Information'>
            <InfoBox
                title='GPU'
                information={hardware.controllers[0].model}
                gridPositions={{
                    gridColumnStart: 1,
                    gridColumnEnd: 2,
                    gridRowStart: 1,
                    gridRowEnd: 1,
                }}
            />
        </InfoContainer>
    );
}
