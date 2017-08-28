import React from 'react';

const getVisibilityFilter= (filter, tasks) => {
  console.log(filter);
  if (filter === 'todo') {
    return tasks.filter(item => !item.status);
  }
  if (filter === 'done') {
    return tasks.filter(item => item.status);
  }
  return tasks;
};


const List = ({filter, tasks, changeStatus}) => (
  <ul className="col s4">
    {
      getVisibilityFilter(filter, tasks).map(item => (
        <li key={item.id}
            className={item.status ? "done" : "todo"}
            onClick={() => { changeStatus(item.id) }} >
        {item.content}
        </li>
      ))
    }
  </ul>
);
// class List extends Component {
//   render({filter, tasks, changeStatus}){
//     const listTasks = this.props.tasks.map((item) => {
//       return(
//         <li onClick= {()=>{
//           this.props.changeStatus(item.id);
//         }}
//         getVisibilityFilter(filter, tasks).map(item => (
//
//         className={ item.status ? "done" : "todo" }
//         key={item.id}
//         >{item.content}</li>
//       ))
//     })
//     return(
//       <ul>
//         {
//
//
//           listTasks
//         }
//       </ul>
//     )
//   }
// }

export default List;
