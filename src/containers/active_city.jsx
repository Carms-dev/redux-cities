import React from 'react';

import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (props.selectedCity) {
    const src = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;
    const style = { width: '100%' };

    return (
      <div className="active-city">
        <h3>{props.selectedCity.name}</h3>
        <p>{props.selectedCity.address}</p>
        <img src={src} alt="City" style={style} />
      </div>
    );
  }

  return (
    <div className="active-city">
      <h3>Select a city to see details.</h3>
    </div>
  );
};

function setStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(setStateToProps)(ActiveCity);
