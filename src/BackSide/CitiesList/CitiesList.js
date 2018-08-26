import React from 'react';
import { func, arrayOf, shape, string } from 'prop-types';
import CityItem from './CityItem';
import './list.css';

const CitiesList = ({ onSelect, cities, currentCity }) => {
  return (
    <ul className='list'>
      {cities.map(city => (
        <CityItem
          key={city.title}
          isSelected={city.title === currentCity.title}
          onSelect={onSelect}
          city={city}
        />
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  onSelect: func,
  cities: arrayOf(
    shape({
      title: string.isRequired
    })
  ),
  currentCity: shape({
    title: string.isRequired
  }).isRequired
};

export default CitiesList;
