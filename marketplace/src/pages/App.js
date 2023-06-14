import React, { Component } from "react";
import ImageGallery from './ImageGallery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          link: 'https://example.com/image1.jpg',
          title: 'Image 1',
          description: 'This is the first image',
        },
        {
          link: 'https://example.com/image2.jpg',
          title: 'Image 2',
          description: 'This is the second image',
        },
        {
          link: 'https://example.com/image3.jpg',
          title: 'Image 3',
          description: 'This is the third image',
        },
      ],
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
            <img style={{ width: 100 }} src={this.state.image} />
            <h1>Select Image</h1>
            <input type="image" name="myImage" onChange={this.onImageChange} />
            <ImageGallery />;
          </div>
        </div>
      </div>
    );
  }
}
export default App;