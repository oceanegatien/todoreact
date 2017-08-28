import React, {Component} from 'react';

class List extends Component {
  constructor() {
    super();

  }
  render(){
    const listTasks = this.props.tasks.map((item) => {
      return(
        <li>{item}</li>
      )
    });
    return(
      <ul>
        {listTasks}
      </ul>
    )
  }
}

export default List;
