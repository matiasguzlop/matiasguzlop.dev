import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.theme.backgroundColor.primary};
    color: ${props => props.theme.color.primary};
    border: solid 1px;
    transition: 0.2s;
    border-radius: 50px;
    padding: 1em 2em;
    font-size: 1em;
    width: 50%;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.color.secondary};
        background-color: ${props => props.theme.backgroundColor.secondary};
    }
    a{
        color: ${props => props.theme.color.tertiary};
    }
    
`;
