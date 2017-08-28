import React, {Component} from 'react';



class AddTaskInput extends Component {
  constructor(){
    super();
    this.state ={
      value: ""
    };
  }
  render() {
    return (
      <form className="input-field col s4" onSubmit={(e)=>{
        e.preventDefault();
        if (this.state.value.trim()) {
          this.props.addTask(this.state.value);
        }
        this.setState({value: ""});
      }}
      >

        <label htmlFor="task">Tâche</label>
        <input onChange={(e)=>{
          this.setState({value: e.target.value});
        }} id="task" type="text" name="task" value={this.state.value} />
        <button className="btn btn-primary" type="submit">Ok</button>
      </form>
    )
  }
}

export default AddTaskInput;
