import React from 'react';
import PropTypes from 'prop-types';

export const ToDoCount = ({ number }) => {
    const plural = number === 1 ? '' : 's';

    return <div>{number} todo{plural}</div>;
}

ToDoCount.propTypes = {
    number: PropTypes.number.isRequired
};