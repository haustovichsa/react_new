import styled from 'styled-components';

const Button = styled.button`
    font: inherit;
    border: 1px solid #497aba;
    background: #145bb9;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;

    &:hover,
    &:active {
        background: #497aba;
        border-color: #497aba;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
`;
export default Button;
