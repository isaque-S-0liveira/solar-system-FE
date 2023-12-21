import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planets-card">
        <img
          className="planets-img"
          id={ `planet-${planetName}-img` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name" className="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
