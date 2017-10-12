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
        name: snap.val().name,
        dob: snap.val().dob
      })

      this.setState({
        users: previousUsers
      })
    })

  }

  //Custom functions
  addUserHandle(e){
    e.preventDefault();//form default behaviour to submit and refresh
    let name = this.refs.newUser.value
    let dob = this.refs.dob.value
    databaseuser.push().set({ name: name,dob:dob});
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
                  <input type="text" required ref="newUser" placeholder="user Name"/>
                  <input type="text" required ref="dob" placeholder="Date Of Birth"/>
                  <input className="btn btn-primary" type="submit" value="Submit User" />
                
              </form>
            {/*   <pre>{JSON.stringify(users)}</pre> */}
              <ul>
                {
                  users.map((user => <li key={user.id}>
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


