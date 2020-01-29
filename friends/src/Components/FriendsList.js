import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("component did mount!");
    this.getData();
  }

  // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("Friends List Fetched!", res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(error =>
        console.log("Error: Friends List was not returned!", error)
      );
  };
  render() {
    return (
      <div>
        <AddFriend />
        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default FriendsList;
