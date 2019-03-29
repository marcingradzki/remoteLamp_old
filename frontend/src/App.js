import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faClock, faInfoCircle, faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import TimePicker from "./TimePicker";
import Icon from './icon';
import Snackbar from './snackbar';

library.add(faLightbulb, faClock, faInfoCircle, faCloudMoon);

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
  state = {
    icons: {
      'bulb': { icon: 'lightbulb', width: '40vh', height: '40vh' },
      'time': { icon: 'clock', width: '10vh', height: '10vh' },
      'details': { icon: 'info-circle', width: '10vh', height: '10vh' },
      'sunset': { icon: 'cloud-moon', width: '10vh', height: '10vh' },
    },
    snackbar: false,
    message: '',
    time: new Date().toISOString(),
  }

  openTimePicker = () => {
    this.picker.current.open();
  }

  render() {
    return (
      <Container>
        <Switch>
          <Icon {...this.state.icons.bulb} />
        </Switch>
        <Buttons>
          <Icon {...this.state.icons.details} />
          <Icon {...this.state.icons.time} toggleButton onClick={this.openTimePicker}/>
          <Icon {...this.state.icons.sunset} onClick={state => {
            this.setState({ snackbar: true, message: `Sunset mode: ${state ? 'OFF' : 'ON'}` });
          }}/>
        </Buttons>
        <TimePicker picker={this.picker} onChange={date => this.setState({ time: date._d.toISOString() })}/>
        <Snackbar
          open={this.state.snackbar}
          onClose={() => this.setState({ snackbar: false })}
          message={this.state.message}
        />
      </Container>
    );
  }
}

export default App;
