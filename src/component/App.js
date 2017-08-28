import React from 'react';
import { v4 } from 'node-uuid';

import AddTaskInput from './AddTask';
import List from './List';
import Filter from './Filter';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tasks:[],
      filter: 'all'
    }
    this._addTaskOnSubmit = this._addTaskOnSubmit.bind(this);
    this._changeTaskStatut = this._changeTaskStatut.bind(this);
    this._onChangeFilter = this._onChangeFilter.bind(this);
  }
  _addTaskOnSubmit(task){
    this.setState({
      tasks:[
        ...this.state.tasks,
        { content: task,
          id : v4(),
          status : false
        }
      ]
    });
  }
  _changeTaskStatut(id){
    this.setState({
      tasks: this.state.tasks.map(item =>{
        if (item.id === id) {
          return {content: item.content, id: item.id, status: !item.status}
        }
        return item;
      })

    })
  }
  
  }
  componentDidMount(){
    let storage = JSON.parse(localStorage.getItem('state'));
    if (storage !== null && this.state.tasks.length === 0 ) {
      this.setState({
        tasks: storage
      })

    }
  }
  componentDidUpdate(){
    if (this.state.tasks.length !==0) {
      localStorage.setItem('state', JSON.stringify(this.state.tasks));
    }
  }
  render(){
    console.log(this.)
    return (
      <div>
        < AddTaskInput addTask={this._addTaskOnSubmit} />
        < List tasks={this.state.tasks} changeStatus= {this._changeTaskStatut} />
        < Filter onChangeFilter={this._onChangeFilter} />
      </div>
  )
  }
}

export default App;
