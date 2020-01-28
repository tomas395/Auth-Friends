import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    newFriend: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("http://localhost:5000/api/friends", this.state.newFriend)
      .then(res => {
        console.log("Add Friends Fetched!", res.data);
        this.setState({ friends: [...res.data, res.data.payload] });
        this.props.history.push("/protected");
      })
      .catch(error =>
        console.log("Error: Add Friends was not returned!", error)
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Friend's Name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="age"
            placeholder="Friend's Age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Friend's Email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />

          <button type="submit">Add Friend</button>
          {this.state.isFetching && (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default AddFriend;
