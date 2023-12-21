import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="main-planets-container">
        <Title headline="Planetas" />
        <div className="linha" />
        <div className="planets-container">
          {Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
