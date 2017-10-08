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
var TodoComponent =  createReactClass({
    render: function(){
        return(
            <h1>Hellooooo without ES6 feature</h1>
        );
    }
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
