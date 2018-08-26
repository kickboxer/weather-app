import React, { Component } from 'react';
import './card.css';
import optionsImage from './options.svg';

export default class FrontSide extends Component {
  render() {
    return (
      <div className="card is-clear-day">
        <div className="card-row">
          <div>Sunday</div>
          <div>Aug 28</div>
        </div>
        <img src='/icons/clear-day.svg' alt='clear-day' />
        <div className="card-row">
          <div className="card-temperature">19
            <span className="small">15</span>
          </div>
          <div className="card-weather">Sunny</div>
        </div>
        <div className="card-line" />
        <div className="card-row">
          <div className="card-city">Minsk</div>
          <button>
            <img src={optionsImage} width={32} alt='options' />
          </button>
        </div>
      </div>
    );
  }
};
