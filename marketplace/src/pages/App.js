import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

   // if we are using arrow function binding is not required
   //  this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img))
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div style={{}}>
        <div>
          <div>
            <img style={ {width:100}}src={this.state.image} />
            <h1>Select Image</h1>
            <input type="image" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;