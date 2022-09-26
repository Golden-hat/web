import React from 'react';
import Task from './Task.js'

class Tasks extends React.Component{
	render(){
		return(
			<div>
				{this.props.tasks.map (
					task => //elemento que itera el array
					<Task //Llamada al "constructor de tareas", que junto a .map, genera una tarea por cada elemento en la lista 
					task = {task} // variable que almacena el elemento del array iterado. Es homónima al constructor de tareas, aunque podría llamarse cualquier cosa.
					key = {task.id} // almacena una key que identifica numéricamente al objeto, y que coincide con su ID asignada.
					></Task>)}
			</div>
		);
	}	
}

export default Tasks;