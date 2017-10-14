import React from "react";
import { Link } from 'react-router-dom'
var createReactClass = require('create-react-class');
import {databaseuser} from "./config/config";

export class User extends React.Component {

  constructor(prop){
  super(prop);
  this.state ={users: [],counter: 0}
  this.addUserHandle = this.addUserHandle.bind(this);
}

componentWillMount(){
    const previousUsers = this.state.users;

    // DataSnapshot
    databaseuser.on('child_added', snap => {
      previousUsers.unshift({
        id: snap.key,
        firstName: snap.val().firstName,
        lastName: snap.val().lastName
      })

      this.setState({
        users: previousUsers
      })
    })

  }

  //Custom functions
  addUserHandle(e){
    e.preventDefault();//form default behaviour to submit and refresh
    let firstName = this.refs.firstName.value
    let lastName = this.refs.lastName.value
    databaseuser.push().set({ firstName: firstName,lastName:lastName});
    this.refs.addUser.reset()//each submit clear text boxes
  }
 

  render() {
    let users = this.state.users
    return (
            <div >
              <Header />
              <h3>The User Page</h3>
              <p>User ID: {this.props.match.params.id}</p>
              <form ref="addUser" id="add-user" onSubmit={this.addUserHandle}>
                  <input type="text" required ref="firstName" placeholder="First Name"/>
                  <input type="text" required ref="lastName" placeholder="Last Name"/>
                  <input className="btn btn-primary" type="submit" value="Submit User" />
                
              </form>
            {/*   <pre>{JSON.stringify(users)}</pre> */}
              <ul>
                {
                  users.map((user => <li key={user.id}>
                                    {user.firstName} - {user.lastName}
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
        <li><Link to='/'>Todo</Link></li>
      </ul>
    </header>
  )


