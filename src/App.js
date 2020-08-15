import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItems/AddItem';


class App extends Component {
  state={
    items:[
    {id:1,name:'Mohannad',age:37},
    {id:2,name:'Najla',age:31},
    {id:3,name:'Masa',age:6},
    {id:4,name:'Jamil',age:3}
  ]}
  deleteItem =(id) => {
    let items = this.state.items.filter(item=> {
      return item.id !== id
    })
    this.setState({items})
  }
  addItem =(item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
  return (
    <div className="App container">
      <h1 className='text-center'> Todo List </h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItem addItem={this.addItem} />
    </div>
  );
}}

export default App;
