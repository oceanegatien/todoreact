import React from 'react';
import AddTaskInput from './AddTask';
import List from './List'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tasks:[]
    }
    this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
  }
  _addTaskOnSubmit(task){
    this.setState({
      tasks:[
        ...this.state.tasks,
        task
      ]
    })
  }
  render(){
    
    return (
      <div>
        < AddTaskInput addTask={this._addTaskOnSubmit} />
        < List tasks={this.state.tasks} />
      </div>
  )
  }
}

export default App;
