import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#40798C',
		},
	},
	overrides: {
		MuiSnackbarContent: {
			root: {
				flexGrow: '0 !important',
				backgroundColor: '#40798C',
				color: '#CADADF',
				fontWeight: 'bold',
			}
		}
	},
});

ReactDOM.render(
<MuiThemeProvider theme={customTheme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
    </MuiPickersUtilsProvider>
</MuiThemeProvider>
, document.getElementById('root'));

serviceWorker.unregister();
