import React from 'react';
import { string, shape, func, number } from 'prop-types';
import WeatherIcon from './WeatherIcon';
import './card.css';
import optionsIcon from './options.svg';

const FrontSideView = ({
  summary,
  icon,
  temperature,
  apparentTemperature,
  date,
  currentCityTitle,
  onClick
}) => {
  return (
    <div className={`card is-${icon}`}>
      <div className='card-row'>
        <div className='card-day'>{date.format('dddd')}</div>
        <div className='card-day'>{date.format('MMM Do')}</div>
      </div>
      <WeatherIcon icon={icon} onClick={this.onClick} />
      <div className='card-row'>
        <div className='card-temperature'>{`${parseInt(temperature, 10)}°`}
          <span className='small'>/ {parseInt(apparentTemperature, 10)}°</span>
        </div>
        <div className='card-weather'>{summary}</div>
      </div>
      <div className='card-line' />
      <div className='card-row'>
        <div className='card-city'>{currentCityTitle}</div>
        <img
          className='card-icon'
          src={optionsIcon}
          width='35px'
          alt='icon-options'
          onClick={onClick}
        />
      </div>
    </div>
  );
};

FrontSideView.propTypes = {
  summary: string.isRequired,
  icon: string.isRequired,
  temperature: number.isRequired,
  apparentTemperature: number.isRequired,
  date: shape({
    format: func
  }).isRequired,
  currentCityTitle: string.isRequired,
  onClick: func
};

export default FrontSideView;
