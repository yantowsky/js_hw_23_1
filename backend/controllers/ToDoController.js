const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.addToDo = async (req, res) => {
    const { text, checked } = req.body;
    ToDoModel
        .create({ text, checked })
        .then(data => {
            console.log('Add Successfully...');
            res.send(data);
        })
        .catch((err) => console.log(err));
}

module.exports.checkedToDo = async (req, res) => {
    const { _id, checked } = req.body
    ToDoModel
        .findByIdAndUpdate(_id, {checked})
        .then(() => res.send('Updated Secsessfully...'))
        .catch((err) => console.log(err));
}

module.exports.delToDo = async (req, res) => {
    const { _id } = req.body
    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.send('Deleted Secsessfully...'))
        .catch((err) => console.log(err));
}
