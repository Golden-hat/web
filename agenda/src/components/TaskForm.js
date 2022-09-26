import React from "react";

class TaskForm extends React.Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = e =>{
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e =>{
        //console.log(e.target.value) //e.target.value(.target) llama al objeto del event. En este caso, llama al valor del objeto
        this.setState({
            [e.target.name]: e.target.value //esto actualiza el estado de title y de description acorde a dónde se haya hecho la llamada.
        }); 
    }

    render(){
        return(
            <div>
                <div id="HeaderContainer">
                    <h1 id="HeaderTitle">Agenda.</h1>
                    <p>Rápida y personal.</p>
                </div>
                <form id="FormContainer" onSubmit={this.onSubmit}>
                    <p1>Título de la tarea</p1>
                    <input name="title" type = "text" placeholder="Escribe aquí" onChange={this.onChange} ></input>
                    <p2>Descripción</p2>
                    <input name="description" type = "text" placeholder="Escribe aquí" onChange={this.onChange} ></input>
                    <input type = "submit" id="submitButton"></input>
                </form>
            </div>
        )
    }

}

export default TaskForm;