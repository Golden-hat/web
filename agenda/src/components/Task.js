import React from "react";

class Task extends React.Component{
    render(){
        if(this.props.task.done === 0 ){
            return(
                <div id = "taskContainer">
                    <div id="TaskInfo">
                        <h1>{this.props.task.title}</h1> {/* llamada al atributo title desde la tarea "task", recibido como PROPIEDAD!! desde Tasks.js en la forma task = task */}
                        <p>{this.props.task.description}</p> {/* llamada al atributo description desde la tarea "task", recibido como PROPIEDAD!! desde Tasks.js en la forma task = task */}
                        </div><button id="Toggle" onClick={ () => {this.props.task.done = 1; this.forceUpdate()}}> Hecho </button>
                </div>
            )
		}
        else{
            return;
        }
    }
} 
        


export default Task; 