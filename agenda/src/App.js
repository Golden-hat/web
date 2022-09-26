import React from 'react';
import './App.css';
import Tasks from './components/Tasks.js'
import tasks from './data/tasks.json'
import TaskForm from './components/TaskForm.js';

let id = 0;
class App extends React.Component {

  state = {
    tasks: tasks
  }
  
  addTask = (title, description) => {
    const taskNew = {
      title: title,
      description: description,
      id: id,
      done: 0
    }
    console.log(taskNew);
    id++;
    this.setState({
      tasks: [...this.state.tasks, taskNew]
    })
  }

  render(){
    return (
      <div>
        <TaskForm addTask = {this.addTask}></TaskForm>
        <Tasks tasks = {this.state.tasks}/> {/* mediante tasks = this.state... le pasamos la lista de objetos al elemento Tasks, 
        quien a su vez itera a lo largo de la lista para crear una task por cada objeto "tarea" que encuentra */}
      </div>
    );
  }
}

export default App;
