import axios from "axios";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       userInfo :{
        name : "Xeeshan",
        location:"default",
        avatar_url :"https://dummy.com/"
       }
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/xeeshanmohammad"
    );
    const json = await data.json();
    this.setState({
        userInfo:json
    })
  }

  render() {
    // const { name, location, email } = this.props;
    // let { count } = this.state;
    return (
      <div>
        <h1>User Details</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h3>Name : {this.state.userInfo.login}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>
        
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button> */}
      </div>
    );
  }
}

export default UserClass;
