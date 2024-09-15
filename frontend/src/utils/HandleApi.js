import axios from 'axios';

const dataBaseUrl = 'http://localhost:8787';

const getToDoList = (setToDo) => {
    axios
        .get(dataBaseUrl)
        .then(({ data }) => {
            setToDo(data);
        });
}

const addToDo = (e, text, setText, checked, setToDo) => {
    e.preventDefault();
    text.trim() && axios
        .post(`${dataBaseUrl}/add`, { text, checked })
        .then(data => {
            setText('');
            getToDoList(setToDo);
        })
        .catch(err => console.log(err));
}

const checkedToDo = (_id, checked, setToDo) => {
    const newChecked = !checked;
    axios
        .post(`${dataBaseUrl}/checked`, { _id, checked: newChecked })
        .then(data => {
            getToDoList(setToDo);
        })
        .catch(err => console.log(err));
}

const delToDo = (_id, setToDo) => {
    axios
        .post(`${dataBaseUrl}/del`, { _id })
        .then(data => {
            getToDoList(setToDo);
        })
        .catch(err => console.log(err));
}

export { getToDoList, addToDo, checkedToDo, delToDo };
