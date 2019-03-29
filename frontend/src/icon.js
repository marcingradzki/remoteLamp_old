import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const setShadows = glow => {
    let y1 = glow ? '3' : '10',
        y2 = glow ? '1' : '6',
        blur1 = glow ? '7' : '20',
        blur2 = glow ? '1' : '6';
    return `0 ${y1}px ${blur1}px rgba(0,0,0,0.19), 0 ${y2}px ${blur2}px rgba(0,0,0,0.23);`
};

const Icon = styled.svg`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.glow ? '#F1D302' : '#CADADF'};
    border-radius: 15px;
    box-shadow: ${props => setShadows(props.glow)};
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    padding: 10px;
`;

export default ({toggleButton, icon, width, height, onClick}) => {
    const [clicked, setClicked] = React.useState(false);
    return (
        <Icon
            width={width}
            height={height}
            glow={clicked}
            onClick={() => {
                setClicked(!clicked);
                toggleButton && setTimeout(() => {
                    setClicked(false);
                }, 180);
                onClick && onClick(clicked);
            }}
        >
            <FontAwesomeIcon icon={icon} />
        </Icon>
    );
};