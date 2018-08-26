import React, { Component } from 'react';
import { func, bool, shape, string } from 'prop-types';
import classNames from 'classnames';

export default class CityItem extends Component {
  static propTypes = {
    onSelect: func,
    isSelected: bool,
    city: shape({
      title: string.isRequired
    })
  };

  onClick = () => {
    const { onSelect, city } = this.props;
    onSelect(city);
  };

  render() {
    const { city, isSelected } = this.props;
    return (
      <li
        className={classNames('list-item', { 'is-selected': isSelected })}
        onClick={this.onClick}
      >
        {city.title}
      </li>
    );
  }
}
