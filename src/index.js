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
    todos = todos.map(function(item, index){
      return (<TodoItem key={index} item={item} />);
    });
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  } //render
});

//Create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
