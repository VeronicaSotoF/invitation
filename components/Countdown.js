import React from "react";
import styled from "styled-components";

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;

  .circle {
    border-radius: 50%;
    background-color: var(--accent-color);
    padding: 1rem;
    margin: 0.5rem 1rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-text-color);
  }
  label {
    font-size: 0.9rem;
    color: white;
    text-shadow: 1px 1px black;
  }
  .date-element {
    margin: 2rem 0rem;
  }
`;

class Countdown extends React.Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    let futureDate = new Date("Mar 25, 2023 19:00:00").getTime();
    //Distance debe ser calculado cada segundo
    this.interval = setInterval(() => {
      let nowDate = new Date().getTime();
      let distance = futureDate - nowDate;
      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours:
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 1,
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <CountdownContainer>
        <div className="date-element">
          <div className="circle">{this.state.days}</div>
          <label>dias</label>
        </div>
        <div className="date-element">
          <div className="circle">{this.state.hours}</div>
          <label>horas</label>
        </div>
        <div className="date-element">
          <div className="circle">{this.state.minutes}</div>
          <label>minutos</label>
        </div>
        <div className="date-element">
          <div className="circle">{this.state.seconds}</div>
          <label>segundos</label>
        </div>
      </CountdownContainer>
    );
  }
}

export default Countdown;
