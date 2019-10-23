import React from 'react';
import './openinghours.css'
import { OpeningHour } from './components/OpeningHour';

const OpeningHours = () => {
    const openingHours = [
        {
            days: 'Montag, Mittwoch-Freitag',
            hours: [
                '12:00 - 14:30',
                '17:00 - 21:30'
            ]
        },
        {
            days: 'Samstag und Sonntag',
            hours: [
                '17:00 - 21:30'
            ]
        },
    ];

    return (
        <div className="static-background">
            <section id="opening-hours-wrapper">
                <div className="opening-title">
                    ÖFFNUNGSZEITEN
                </div>
                <div className="wrapper">
                    <div className="wrapper-tile">
                        <i className="far fa-clock" />
                        <div className="wrapper-openinghours">
                            {openingHours.map((oh, idx) =>
                                <OpeningHour
                                    day={oh.days}
                                    hours={oh.hours}
                                />
                            )}
                        </div>
                    </div>
                    <div className="wrapper-tile">
                        <i className="fas fa-clock" />
                        <div className="days-wrapper">
                            <div className="days">
                                <p className="text-day">Dienstag</p>
                                <div className="time">
                                    GESCHLOSSEN
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default OpeningHours;