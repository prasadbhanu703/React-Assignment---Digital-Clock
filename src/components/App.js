import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        };
        this.intervalId = null;
    }
    render() {

        return ( <div className = "Clock" >
            <h3 id = "time" > { this.getTimeString() } </h3>
            </div>
        )
    }
    getTimeString() {
        // console.log(this.state.time);
        const curTime = this.state.time;
        const [hours, minutes, seconds] = [curTime.getHours(), curTime.getMinutes(), curTime.getSeconds()];

        const amOrPm = hours >= 12 ? "PM" : "AM";
        const twelveHoursFormat = hours > 12 ? hours - 12 : hours;
        const hourString = this.padNumberToTwoDigits(twelveHoursFormat);
        const minuteString = this.padNumberToTwoDigits(minutes);
        const secondString = this.padNumberToTwoDigits(seconds);

        const timeString = `${hourString}:${minuteString}:${secondString} ${amOrPm}`;
        return timeString;
    }

    padNumberToTwoDigits(num) {
        return `${num < 10   ? "0" : ""}${num}`;
    }
}


export default App;