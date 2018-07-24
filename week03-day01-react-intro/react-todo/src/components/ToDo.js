import React from 'react';
import PropTypes from 'prop-types';

export const ToDo = ({ ordinal, todo }) => {
    return <li>
    {ordinal}. {todo.title}
    <input type="checkbox" id={todo.id} checked={todo.complete} />
    <label htmlFor={todo.id} />
    <button>
      <i className="fa fa-trash" />
    </button>
  </li>
}

ToDo.proptypes = {
    ordinal: PropTypes.number.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired
    })
};