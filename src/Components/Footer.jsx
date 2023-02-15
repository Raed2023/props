import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({normal,children}) => {
    console.log(children)
  return (
    <div>
        <h2>{normal}</h2>
        <h4>{children}</h4>
    </div>
  )
}
Footer.propTypes = {
    normal: PropTypes.string
  };
Footer.defaultProps={
    normal:"this is a default props"
}
export default Footer