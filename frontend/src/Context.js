import React from 'react';

const Context = React.createContext();

export class Provider extends React.Component {

    state = {
        icons: {
            'bulb': { icon: 'lightbulb', width: '40vh', height: '40vh', clicked: false },
            'time': { icon: 'clock', width: '10vh', height: '10vh', clicked: false },
            'details': { icon: 'info-circle', width: '10vh', height: '10vh', clicked: false },
            'sunset': { icon: 'cloud-moon', width: '10vh', height: '10vh', clicked: false },
        },
        snackbar: false,
        drawer: false,
        message: '',
        time: null,
    };

    render() {
        const { children } = this.props;
        return (
            <Context.Provider value={{
                ...this.state,
                setDrawer: value => this.setState({ drawer: value }),
                setSnackbar: value => this.setState({ snackbar: value }),
                setMessage: value => this.setState({ message: value }),
                setTime: value => this.setState({ time: value }),
                setClicked: name => value => {
                    this.setState({
                        icons: {
                            ...this.state.icons,
                            [name]: { ...this.state.icons[name], clicked: value }
                        }
                    })
                },
                toggleModes: (time, sunset) => {
                    this.setState({
                        icons: {
                            ...this.state.icons,
                            'time': { ...this.state.icons.time, clicked: time },
                            'sunset': { ...this.state.icons.sunset, clicked: sunset }
                        }
                    })
                },
            }}>
                {children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
