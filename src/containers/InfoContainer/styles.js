import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
    margin: 0 auto;
    margin-top: 16px;
    width: 75%;

    div.title {
        padding: 16px;
        display: flex;
        justify-content: left;
        background: #333;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        h2 {
            padding-left: 5px;
        }

        .title-icon {
            font-size: 24px;
        }
    }

    div.content {
        background: #333;
        padding: 16px;
        display: grid;
        grid-gap: 16px;
    }
`;
