import styled from 'styled-components';

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: left;
    background: #333;
    margin-bottom: 16px;
    box-shadow: 0 -2px 0 #ccc;

    .logo-container {
        font-size: 24px;
        margin: 10px;
        margin-left: 16px;
        p {
            display: inline-block;
            font-weight: bolder;
            padding-left: 2px;
        }
    }

    ul {
        display: flex;
        justify-content: left;
        list-style-type: none;

        li {
            cursor: pointer;
            padding: 18px;

            a {
                text-decoration: none;
            }

            :hover {
                background: #333;
                text-shadow: 1px 1px 10px #fff;
                box-shadow: inset 0 -2px 0 #fff;
            }
        }
    }
`;
