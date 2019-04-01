import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Row from './row';

const DrawerContent = styled.div`
    background-color: #40798C;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const DrawerComponent = ({ open, toggleDrawer, sunset, customTime }) => {
    return (
        <Drawer open={open} onClose={toggleDrawer} anchor="top">
          <DrawerContent
            tabIndex={0}
            onClick={toggleDrawer}
          >
            <Row text="Sunset today" time={sunset} icon="sun"/>
            <Divider />
            <Row text="Custom lighting" time={customTime} icon="clock"/>
          </DrawerContent>
        </Drawer>
    );
}

export default DrawerComponent;