import React, { Component } from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import CitiesList from './CitiesList';
import './button.css';

export default class BackSide extends Component {
  static propTypes = {
    cities: arrayOf(
      shape({
        title: string.isRequired
      })
    ),
    onChange: func,
    onSave: func,
    currentCity: shape({
      title: string.isRequired
    })
  };

  render() {
    const { cities, onChange, onSave, currentCity } = this.props;
    return (
      <div className='card-back'>
        <CitiesList
          cities={cities}
          onSelect={onChange}
          currentCity={currentCity}
        />
        <button className='button' onClick={onSave}>
          Apply
        </button>
      </div>
    );
  }
}
