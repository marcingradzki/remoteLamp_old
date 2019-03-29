import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core';

const styles = {
    root: {
        width: '60%',
        transform: 'translate(20vw, 0px)',
    },
}

const SnackbarComponent = ({ open, onClose, message, classes }) => {
    return (
        <Snackbar
            className={classes.root}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={onClose}
            autoHideDuration={1000}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
        />
    );
};

export default withStyles(styles)(SnackbarComponent);