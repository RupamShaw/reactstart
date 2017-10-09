var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

//CSS requires
require('./css/todoItem.css');
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

TodoItem.propTypes = {
  item: PropTypes.string
};

module.exports = TodoItem;
