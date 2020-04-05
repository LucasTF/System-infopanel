import styled from 'styled-components';

export const StyledInfoBox = styled.fieldset`
    border-radius: 5px;
    border: 3px solid #c81d25;
    box-shadow: 3px 3px 15px #95190c;
    padding: 8px;
    grid-column-start: ${(props) => props.gridPositions.gridColumnStart};
    grid-column-end: ${(props) => props.gridPositions.gridColumnEnd};
    grid-row-start: ${(props) => props.gridPositions.gridRowStart};
    grid-row-end: ${(props) => props.gridPositions.gridRowEnd};

    legend {
        color: #d61d27;
        padding: 0 8px;
        font-weight: bold;
        font-size: 24px;
    }

    div {
        display: flex;
        justify-content: center;
        font-size: 36px;
        p {
            color: #d61d27;
            font-weight: bold;
        }
        img.logo {
            width: 36px;
            padding-right: 8px;
        }
    }
`;
