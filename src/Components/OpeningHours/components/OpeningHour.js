import React from 'react';


export const OpeningHour = ({ day, hours, displayClock }) => {

    return (
        <>
            <div className="days-wrapper">
                <div className="days">
                    <p className="text-day">{day}</p>
                    {hours.map(hour => (
                        <div className="time">
                            {hour}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}