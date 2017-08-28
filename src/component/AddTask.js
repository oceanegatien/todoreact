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
      <form onSubmit={(e)=>{
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
        <button type="submit">Ok</button>
      </form>
    )
  }
}

export default AddTaskInput;
