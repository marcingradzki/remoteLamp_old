import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = {
    typography: {
        paddingLeft: '10px',
        color: '#CADADF',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }
};

const Row = styled.div`
    font-size: 1.5rem;
    color: #CADADF;
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 9fr 1fr;
    align-items: center;
    margin-bottom: 10px;
`;

const RowComponent = ({ classes, text, time, icon }) => {
    return(
        <Row>
            <div className={classes.icon}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <Typography variant="h5" className={classes.typography}>{text}: </Typography>
            <span>{time || 'UNSET'}</span>
        </Row>
    );
}

export default withStyles(styles)(RowComponent);