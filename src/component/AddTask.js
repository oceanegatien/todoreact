import React, {Component} from 'react';



class AddTaskInput extends Component {
  constructor(){
    super();
    this.state ={
      value: ""
    };
  }
  render() {
      console.log(this.state.value);
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();

        this.props.addTask(this.state.value);
        this.setState({value: ""});


      }}
      >

        <label htmlFor="task">Task</label>
        <input onChange={(e)=>{
          this.setState({value: e.target.value});
        }} id="task" type="text" name="task" value={this.state.value} />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default AddTaskInput;
