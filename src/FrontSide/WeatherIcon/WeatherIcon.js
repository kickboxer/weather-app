import React from 'react';
import { string, func } from 'prop-types';

const WeatherIcon = ({ icon, onClick }) => {
  return (
    <img
      src={`/icons/${icon}.svg`}
      width='120px'
      alt='weather icon'
      onClick={onClick}
    />
  );
};

WeatherIcon.propTypes = {
  icon: string,
  onClick: func
};

export default WeatherIcon;
