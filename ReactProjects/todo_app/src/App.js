import React, {useState, useEffect} from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  

  // when the app loads, we need to listen to the db and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here.... fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })

  }, [])

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // will stop the refresh 
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>TODO App!</h1>
      <form>

      <FormControl>
        {/* <InputLabel >Write a Todo</InputLabel> */}
        <TextField id="standard-secondary" label="Write a Todo here" color="secondary" value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
        
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
        Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
     
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{props.todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
