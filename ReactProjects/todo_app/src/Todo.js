import { ListItem, ListItemText, List, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import React from 'react'
import './Todo.css';
import db from './firebase';

function Todo(props) {
    console.log(props.todo);
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                   
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</Button>
            </ListItem>
        </List>
    )
}

export default Todo
