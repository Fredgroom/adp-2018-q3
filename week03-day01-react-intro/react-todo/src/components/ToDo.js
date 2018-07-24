
import React from 'react';
import PropTypes from 'prop-types';

export const ToDo = ({ ordinal, todo, toggleComplete, removeToDo }) => {
    return <li>
        {ordinal}. {todo.title}
        <input
            type="checkbox"
            id={todo.id}
            checked={todo.complete}
            onChange={toggleComplete} />
        <label htmlFor={todo.id} />
        <button onClick={removeToDo}>
            <i className="fa fa-trash" />
        </button>
    </li>;
};

ToDo.propTypes = {
    ordinal: PropTypes.number.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired
    }),
    toggleComplete: PropTypes.func.isRequired,
    removeToDo: PropTypes.func.isRequired
};