import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h2>{date.toString()}</h2>
        </div>
    );
};

export default AvailableAppointments;