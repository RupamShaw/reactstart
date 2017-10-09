var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

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
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  } ,//render
  //Custom functions
   onDelete: function(item){
       var updatedTodos = this.state.todos.filter(function(val, index){
           return item !== val;
       });
       this.setState({
         todos: updatedTodos
       });
   }
});

//Create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                      <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
