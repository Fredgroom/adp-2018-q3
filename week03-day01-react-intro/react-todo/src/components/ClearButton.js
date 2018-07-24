import React from 'react';
import PropTypes from 'prop-types';

export const ClearButton = ({ removeCompleted, buttonText }) => {
    return <button onClick={removeCompleted}>{buttonText}</button>;
}

ClearButton.propTypes = {
    removeCompleted: PropTypes.func.isRequired,
    buttonText: PropTypes.string
};

ClearButton.defaultProps = {
    buttonText: 'Clear completed'
};