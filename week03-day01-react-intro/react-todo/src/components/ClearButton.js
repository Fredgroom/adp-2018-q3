import React from 'react';
import PropTypes from 'prop-types';

export const ClearButton = ({removeCompleted, children}) => {
    
    const buttonText = children || 'Clear Completed';
    return <button onClick={removeCompleted}>{buttonText}</button>;
}

ClearButton.propTypes = {
    removeCompleted: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
  };


