import React, { Component } from "react";
import ImageGallery from './ImageList';
import MetaMaskSDK from '@metamask/sdk';
import verbwire from "./verbwire";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 1',
          description: 'This is the first image',
        },
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 2',
          description: 'This is the second image',
        },
        {
          link: 'https://cdn.pixabay.com/photo/2014/02/21/10/57/glass-271151_1280.jpg',
          title: 'Image 3',
          description: 'This is the third image',
        },
      ],
      connectText: 'Connect to MetaMask',
      image: null,
      imageDiv:'',
      walletAddress: '',
      button:'',
    };
    // if we are using arrow function binding is not required
    //  this.onImageChange = this.onImageChange.bind(this);
  }


  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img))
      this.setState({
        image: URL.createObjectURL(img),
        button: this.deployButton()
      });
      console.log("image chosen");

    }
  };
  checker = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    console.log(account);
    this.setState({ walletAddress: account, connectText: 'MetaMask Connected',imageDiv:<input type="file" accept="image/png, image/jpeg" name="myImage" onChange={this.onImageChange} /> });
    return true
  }
  deployButton= ()=>{
   return(
    <button onClick={()=>verbwire.deploy(this.state.walletAddress)}>
      Deploy
    </button>
   )

  }
  render() {
    return (
      <div style={{}}>
        <div>
          <div>
            <div className="justifyContent flexAgain">
              <div className="flexAgainChild">
                <h3 id="wallet">{this.state.walletAddress.length == 0 ? 'Wallet Not Connected' : 'Wallet Address'}{this.state.walletAddress}</h3>
                <button onClick={this.checker}>{this.state.connectText}</button>
              </div>
              <div className="flexAgainChild">
                <h1>Upload NFT</h1>
                {this.state.imageDiv.length<1?'Connect First to Upload':this.state.imageDiv}
                {this.state.button}
              </div>
              <div className="flexAgainChild">
                <img style={{ width: 400 }} src={this.state.image} />
              </div >
            </div>

            <ImageGallery images={this.state.images} />
            "yes"{ }{window.ethereum.isConnected() ? "yes" : "no"}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
