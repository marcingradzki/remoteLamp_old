import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import moment from 'moment';
import { faLightbulb, faClock, faInfoCircle, faCloudMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import TimePicker from "./TimePicker";
import Icon from './Icon';
import Snackbar from './Snackbar';
import Drawer from './drawer/drawer';
import { Consumer } from './Context';

library.add(faLightbulb, faClock, faInfoCircle, faCloudMoon, faSun);

const Container = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  width: 100vw;
  height: 100vh;
`;

const Switch = styled.div`
  padding-top: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

class App extends Component {
  picker = React.createRef();

  render() {
    return (
      <Consumer >
        {
          ({ icons, time, drawer, snackbar, message, setDrawer, setSnackbar, setMessage, setTime, setClicked, toggleModes }) => {
          const openSnackbar = message => {
            setSnackbar(true);
            setMessage(message);
          }
          return (
            <Container>
              <Drawer
                sunset={'18:16'}
                customTime={time}
                open={drawer}
                toggleDrawer={() => {
                  setClicked('details')(false);
                  setDrawer(false);
                }}
              />
              <Switch>
                <Icon {...icons.bulb} onClick={state => setClicked('bulb')(!state)}/>
              </Switch>
              <Buttons>
                <Icon {...icons.details} onClick={() => {
                  setDrawer(true);
                  setClicked('details')(true);
                }}/>
                <Icon {...icons.time} onClick={() => {
                  if (!icons.time.clicked) this.picker.current.open();
                  else {
                    setClicked('time')(false);
                    openSnackbar('Custom lighting turned off');
                    setTime(null);
                  }
                }}/>
                <Icon {...icons.sunset} onClick={state => {
                  if (!icons.sunset.clicked) toggleModes(false, true);
                  else setClicked('sunset')(false);
                  openSnackbar(`Sunset mode: ${state ? 'OFF' : 'ON'}`);
                  setTime(null);
                }}/>
              </Buttons>
              <TimePicker
                picker={this.picker}
                onChange={date => {
                  let time = moment(date._d.toISOString()).format('HH:mm');
                  setTime(time);
                  toggleModes(true, false);
                  openSnackbar(`Custom lighting time set to: ${time}`);
                }}
              />
              <Snackbar
                open={snackbar}
                onClose={() => setSnackbar(false)}
                message={message}
                />
            </Container>
          )}
        }
      </Consumer>
    );
  }
}

export default App;
