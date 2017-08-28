import React, {Component} from 'react';

class List extends Component {
  render(){
    const listTasks = this.props.tasks.map((item) => {
      return(
        <li onClick= {()=>{
          this.props.changeStatus(item.id);
        }}
        className={ item.status ? "done" : "todo" }
        key={item.id}
        >{item.content}</li>
      )
    })
    return(
      <ul>
        {listTasks}
      </ul>
    )
  }
}

export default List;
