import React from 'react';

const ToDoItem = ({ text, checked, checkedToDo, delToDo }) => {
    return (
        <li className={!checked ? 'todo-item' : 'todo-item todo-item--checked'}>
            <input
                type="checkbox"
                checked={checked}
                onChange={checkedToDo}
            />
            <span className="todo-item__description">
                {text}
            </span>
            <button
                className="todo-item__delete"
                onClick={delToDo}
            >
                Видалити
            </button>
        </li>
    );
}

export default ToDoItem;