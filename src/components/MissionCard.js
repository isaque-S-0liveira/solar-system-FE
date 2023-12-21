import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div className="mission-card-header">
          <h3 data-testid="mission-name" className="mission-title">{name}</h3>
        </div>
        <div className="mission-card-body">
          <div className="country-year">
            <p data-testid="mission-year">{year}</p>
            <p data-testid="mission-country">{country}</p>
          </div>
          <p data-testid="mission-destination" className="destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
