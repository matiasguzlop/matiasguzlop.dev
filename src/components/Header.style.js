import styled from 'styled-components';

import { MenuLeft } from '../assets/icons/MenuLeft.tsx';
import { headerHeight } from '../styles/constants';

export const Container = styled.header`
    width: 100%;
    height: ${headerHeight};
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 20px -10px ${props => props.theme.backgroundColor.secondary};
    position: fixed;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
    backdrop-filter: blur(8px);
`;

export const MenuIconContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme.backgroundColor.secondary};
        color: ${props => props.theme.color.secondary};
    }
`;

export const MenuIcon = styled(MenuLeft)`
    display: inline-block;
    margin: 1em;
`;

export const MenuContent = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: absolute;
    left:0;
    top: ${headerHeight};
    list-style: none;
    background-color: ${props => props.theme.backgroundColor.primary};
    color: ${props => props.theme.color.tertiary};
    max-width: 30ch;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    height: 0px;
    padding: 0;
    margin: 0;
    font-weight: lighter;
    &>li{
        line-height: 3em;
        padding-left: 1em;
        height: 3em;
        width: 100%;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        cursor: pointer;
        color: ${props => props.theme.color.primary};
        &:hover{
            color: ${props => props.theme.color.secondary};
            background-color: ${props => props.theme.backgroundColor.secondary};
        }
    }
    &.deployed{
        height: calc(5 * 3em);
        li{
            opacity: 1;
        }
    }
`;

export const Title = styled.h2`
    margin: 0 1em;
    font-family: monospace;
    text-transform: capitalize;
    font-weight: lighter;
    color: ${props => props.theme.color.tertiary};
`;

export const Veil = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor.veil};
    &.visible{
        display: block;
        z-index: -1;
    }
`;
