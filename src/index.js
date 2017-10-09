var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
// const med = "working fine";
// alert('hi'+med );
//============ newer version doesn't support without es6 feature of React.createclass
//Create a component doesn't work
// var TodoComponent = React.createClass({
//     render: function(){
//         return(
//             <h1>Hellooooo</h1>
//         );
//     }
// });

var person ={ pname: 'rupam' ,
              age: 30,
              sex:'f'
            };

function ListComponent(props) {
 return (<div>
          <h1>Hello {props.pers.pname},  {props.name}</h1>
          <p> age : {props.pers.age}</p>
          <p> todos :{props.todos}</p>
        </div>
 );
}

//Create a component  this is not ES6
var TodoComponent =  createReactClass({
  getInitialState: function(){
      return {
          todos: ['wash up', 'eat some cheese', 'take a nap'],
          list:'hello first time list',
          count:0,
          clickcount:0
      }
  }, //getInitialState
  //virtual dom changed so actual dom render only changed component
  handleClick: function() { //this method autobinds coz method autobinds without ES6 but in Es6 needs to bind
    this.state.clickcount = this.state.clickcount +1;
    alert(this.state.list +' count click ' + this.state.clickcount);

   },
  render: function(){

    var countandlistafter5sec= setTimeout(function(){
                                  this.state.count = this.state.count +1;
                                  this.setState({
                                    list:'wow its changed after 5 sec',
                                    count: this.state.count
                                  });
                                }.bind(this),5000);
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return (<li> {item} </li>);
    });
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <h1>change state : {this.state.list} count is {this.state.count}</h1>
        <button onClick={this.handleClick}>
          Say hello
        </button>
        <ListComponent pers ={person} todos={this.state.todos}/>
      </div>
    );
  } //render
});
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
//ES6 feature is class
// class TodoComponent  extends React.Component {
//   render() {
//     return (﻿  <h1>Hellooooo from es6 class</h1>);
//   }
// }
// ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
//const is in Es6
const element = <h1>Hello, world!</h1>;
//ReactDOM.render(element, document.getElementById('todo-wrapper'));

///Conceptually, components are like JavaScript functions. They accept arbitrary
//inputs (called “props”) and return React elements describing what should appear on the screen.
// var person ={ pname: 'rupam' ,
//               age: 30,
//               sex:'f'
//             };
// function TodoComponent(props) {
//  return (<div>
//           <h1>Hello {props.pers.pname},  {props.name}</h1>
//           <p> age : {props.pers.age}</p>
//         </div>
//  );
// }
//
//  ReactDOM.render(<TodoComponent name="from function" pers={person} />, document.getElementById('todo-wrapper'));
