var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import {  Route,Link,BrowserRouter } from 'react-router-dom'
//module requires
var TodoItem = require('./todoItem')

var AddItem = require('./addItem');

var About = require('./about');
//var User = require('./user')
import { User } from './user'


//CSS requires
require('./css/index.css');


const Header = () => (
  <header>

      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/user/10'>User</Link></li>

    </ul>
  </header>
)
var TodoComponent =  createReactClass({
  getInitialState: function(){
      return {
          todos: ['wash up', 'eat some cheese', 'take a nap'],
      }
  }, //getInitialState
  render: function(){
    var todos = this.state.todos;
    todos = todos.map((item, index) =>{
      return (<TodoItem key={index} item={item} onDelete={this.onDelete} />);
    });
    return(
      <div id="todo-list">
        <Header/>

        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  } ,//render
  //Custom functions
   onDelete: function(item){
       var updatedTodos = this.state.todos.filter(
                              function(val, index){
                                return item !== val;
                              });

       this.setState({

                      todos: updatedTodos
                    });
   },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.unshift(item);
        this.setState({
            todos: updatedTodos
        })
    }
});

//SETUP ROUTING
var App = createReactClass({
    render: function(){
        return(
            <BrowserRouter >
            <main>
                <Route exact path={"/"} component={TodoComponent}></Route>
                <Route  path={"/about"} component={About}></Route>
                <Route  path={"/user/:id"} component={User}></Route>
            </main >
            </BrowserRouter>
        );
    }
});
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
