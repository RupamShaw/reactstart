var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
import {  Route,Link,BrowserRouter } from 'react-router-dom'

//module requires
import { databaseTodos } from './config/config'
var TodoItem = require('./todoItem')
var AddItem = require('./addItem');
var About = require('./about');
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
  componentWillMount :function(){
      const previoustodos = this.state.todos;
      // DataSnapshot
      databaseTodos.on('child_added', snap => {
        previoustodos.unshift(
           snap.val().item
        )
        this.setState({
          todos: previoustodos
        })
      })

      databaseTodos.on('child_removed', snap => {
        for(var i=0; i < previoustodos.length; i++){
          if(previoustodos[i] === snap.val().item){
            previoustodos.splice(i, 1);
          }
        }
        this.setState({
          todos: previoustodos
        })
      })
    },

  getInitialState: function(){
      return {
          todos: [],
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
    databaseTodos.orderByChild('item').equalTo(item)
        .once('value').then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
            //remove each child
            databaseTodos.child(childSnapshot.key).remove();
        });
    });
   },

    onAdd: function(item){
      databaseTodos.push().set({ item: item});
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
