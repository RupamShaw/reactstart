import React from "react";
import { Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";﻿
var createReactClass = require('create-react-class');
//import { browserHistory } from "react-router";
import { createBrowserHistory } from 'history'
export class User extends React.Component {
//var users = [];
constructor(prop){
  super(prop);
  this.state ={users: [],counter: 0}
  this.handleSubmit = this.handleSubmit.bind(this);
}
onNavigateHome() {
   this.props.history.push("/");
  }
  //Custom functions
  handleSubmit(e){
    e.preventDefault();//form default behaviour to submit and refresh
    console.log("handle refs");
    console.log(this.refs);
    let name = this.refs.newUser.value
    let dob = this.refs.dob.value
    let counter = this.state.counter
    counter += 1
    // onAdd(this.refs.newUser.value);

    let user = {name, dob, counter}
    let users = this.state.users
    users.unshift(user);
    this.setState({
      users: users,
      counter: counter
    })
    console.log('username'+this.state.users[0].name)
    this.refs.addUser.reset()//each submit clear text boxes
  }


  render() {
    let users = this.state.users
    console.log('render');
    console.log(users);
    return (
            <div >
              <Header />
              <h3>The User Page</h3>
              <p>User ID: {this.props.match.params.id}</p>
              <form ref="addUser" id="add-user" onSubmit={this.handleSubmit}>
                  <input type="text" required ref="newUser" placeholder="user Name"/>
                  <input type="text" required ref="dob" placeholder="Date Of Birth"/>
                  <input type="submit" value="Submit User" />
                  <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
              </form>
              <pre>{JSON.stringify(users)}
              </pre>
              <ul>
                {
                  users.map((user => <li key={user.counter}>
                                    {user.name} - {user.dob}
                                  </li>
                          ))
                }
              </ul>
            </div>
    );
    }
  }//class User
  const Header = () => (
    <header>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </header>
  )

// var User = createReactClass({
//     render: function(){
//         return(
//           <div>
//             <Header />
//             <h3>The User Page</h3>
//             <p>User ID: </p>
//           </div>
//         );
//     }
// });
//
// module.exports = User;
