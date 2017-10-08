var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
const med = "working fine";
alert('hi'+med );
//============ newer version doesn't support without es6 feature of React.createclass
//Create a component doesn't work
// var TodoComponent = React.createClass({
//     render: function(){
//         return(
//             <h1>Hellooooo</h1>
//         );
//     }
// });
//Create a component  this is not ES6
// var TodoComponent =  createReactClass({
//     render: function(){
//         return(
//           <div>
//             <p>hello from para</p>
//             <h1>Hellooooo without ES6 feature</h1>
//           </div>
//         );
//     }
// });
//ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
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
var person ={ pname: 'rupam' ,
              age: 30,
              sex:'f'
            };
function TodoComponent(props) {
 return (<div>
          <h1>Hello {props.pers.pname},  {props.name}</h1>
          <p> age : {props.pers.age}</p>
        </div>
 );
}

 ReactDOM.render(<TodoComponent name="from function" pers={person} />, document.getElementById('todo-wrapper'));
