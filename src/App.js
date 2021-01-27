import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photo: "",
    };
    this.refetch = this.refetch.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => this.setState({ photo: response.data.message }));
  }

  refetch = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      this.setState({ photo: response.data.message });
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.photo} alt="dog" />
        </div>
        <button onClick={this.refetch}>別の写真を取得</button>
      </div>
    );
  }
}

export default App;
