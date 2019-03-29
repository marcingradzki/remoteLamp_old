import React from 'react';
import { TimePicker } from "material-ui-pickers";

export default props => {
    return (
        <div style={{ display: 'none' }}>
            <TimePicker
                ampm={false}
                label="24 hours"
                value={new Date()}
                onClose={() => {}}
                onChange={props.onChange}
                ref={props.picker}
            />
        </div>
    );
};