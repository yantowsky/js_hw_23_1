import { useEffect, useState } from 'react';
import ToDoItem from './components/ToDoItem/ToDoItem';
import { addToDo, getToDoList, checkedToDo, delToDo } from './utils/HandleApi';
import './App.css';

function App() {
    const [toDo, setToDo] = useState([]);
    const [text, setText] = useState('');
    const checked = false;

    useEffect(() => {
        getToDoList(setToDo)
    }, [])

    return (
        <>
            <div className="container">
                <h1>ToDoList</h1>
                <form
                    className="form js--form"
                    onSubmit={(e) => addToDo(e, text, setText, checked, setToDo)}
                >
                    <input
                        className="form__input js--form__input"
                        type="text"
                        name="value"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        autoFocus
                        autoComplete="off"
                        required
                    />
                    <button
                        className="form__btn"
                        type='submit'
                    >
                        Додати
                    </button>
                </form>
                <ul className="js--todos-wrapper">
                    {toDo.map(item =>
                        <ToDoItem
                            key={item._id}
                            text={item.text}
                            checked={item.checked}
                            checkedToDo={() => checkedToDo(item._id, item.checked, setToDo)}
                            delToDo={() => delToDo(item._id, setToDo)}
                        />)}
                </ul>
            </div>
        </>
    )
}

export default App