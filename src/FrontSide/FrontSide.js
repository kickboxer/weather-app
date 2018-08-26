import React, { Component } from 'react';
import { func, shape, number, string } from "prop-types";
import moment from 'moment';
import FrontSideView from './FrontSideView';
import { getWeatherForLocation } from '../api';
import Loader from './Loader';

export default class FrontSide extends Component {
  static propTypes = {
    onClick: func,
    city: shape({
      woeid: number.isRequired,
      title: string.isRequired
    })
  };

  state = { currentWeather: null, date: moment(), prevCityId: null };

  componentDidMount() {
    this.updateWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWeather) {
      return;
    }
    this.updateWeather();
  }

  updateWeather() {
    getWeatherForLocation(this.props.city).then(weather => {
      this.setState({ currentWeather: weather.currently });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.city.woeid !== prevState.prevCityId) {
      return {
        prevCityId: nextProps.city.woeid,
        currentWeather: null
      };
    }

    return null;
  }

  render() {
    if (!this.state.currentWeather) {
      return <Loader />;
    }

    const {
      state: {
        currentWeather: {
          summary,
          icon,
          temperature,
          apparentTemperature,
        },
        date,
      },
      props: {
        city,
      },
    } = this;
    return (
      <FrontSideView
        summary={summary}
        icon={icon}
        temperature={temperature}
        apparentTemperature={apparentTemperature}
        date={date}
        currentCityTitle={city.title}
        onClick={this.props.onClick}
      />
    );
  }
};
